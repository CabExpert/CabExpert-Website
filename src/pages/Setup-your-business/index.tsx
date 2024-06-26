import Navbar from "@/component/navbar";
import styles from "@/styles/setup-your-business.module.scss";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { SetupYourBusiness } from "../../../network-requests/types";
import { setupNewBusinessValidationSchema } from "../../../network-requests/validations/signupValidation";
import { useRouter } from 'next/router';
import { updateSetupNewBusiness, uploadCompanyPorfile } from "../../../network-requests/apis";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Setup() {
  const [typeToggle, setTypeToggle] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  console.log({ id })

  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }


  const fileInputRef = useRef<HTMLInputElement>(null);
  const [companyLogo, setCompanyLogo] = React.useState("");
  const [selectedProfile, setSelectedProfile] = React.useState("");

  const handleUploadClick: any = () => {
    if (fileInputRef.current) {
      fileInputRef?.current?.click();
    }
  };

  const handleFileChange = (setSide: any, setPreview: any) => (event: any) => {
    const selectedFile = event.target.files && event.target.files[0];
    setSide({ file: selectedFile });
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader?.result! as any);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  // console.log({ selectedProfile });

  const handleProfileFileChange = handleFileChange(
    setSelectedProfile,
    setCompanyLogo
  );

  // FORMIK OBJECT... 
  const formik = useFormik({
    initialValues: {
      businessName: "",
      address: "",
      number: "",
      gstNumber: "",
      gstType: "",
      city: "",
      country: "",
      verificationCode: "",
      pincode: "",
      profile: ""
    } as SetupYourBusiness,

    validationSchema: setupNewBusinessValidationSchema(),
    onSubmit: (values: SetupYourBusiness) => {
      console.log({ values }, "values");
      onSetupNewBusiness(values, id);
    },
  });

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
  } = formik;

  console.log({ values })

  const [selectedCountry, setSelectedCountry] = useState('India');
  const handleCountryChange = (e: any) => {
    setSelectedCountry(e.target.value);
  };
  // console.log({ selectedCountry })

  const onSetupNewBusiness = async (values: any, id: string | string[] | undefined) => {
    try {

      const [profileUrl] = await Promise.all([
        Promise.all(
          Object.values(selectedProfile)?.map((imageInfo) =>
            uploadCompanyPorfile(imageInfo)
          )
        ),
      ]);

      console.log("ON SETUP NEW BUSINESS", { values })
      const customPayload = {
        ...values,
        country: selectedCountry,
        profile: profileUrl.length !== 0 ? profileUrl[0][0] : "",
      }
      console.log({ customPayload })
      const response = await updateSetupNewBusiness(customPayload, id as string)
      console.log({ response })
      if (response) {
        toast.success("Successfully setup your business");
        localStorage.clear();
        // router.push("/Payment")
      }
    } catch (error: any) {
      console.log({ error })
      toast.error(error?.response?.data?.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Almost done! Setup your business</h2>
        <div>
          <ToastContainer />
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.logoUpload}>
            {companyLogo ? (
              <label htmlFor="logo">
                <Image src={companyLogo} alt="Company Logo" width={56} height={72} />
              </label>
            ) : (
              <label htmlFor="logo">
                <Image src="/company_logo_placeholder.png" alt="Company Logo" width={56} height={72} />
              </label>
            )}
            <input
              type="file"
              id="logo"
              ref={fileInputRef}
              onChange={(e) => handleProfileFileChange(e)}
              accept=".png, .jpg, .jpeg, .webp"
            />
            <p>Upload company logo</p>
          </div>

          <div className={styles.setupform}>
            <div>
              <input
                type="text"
                id="businessName"
                name="businessName"
                className={styles.inputField}
                placeholder="Company Name"
                onChange={handleChange}
              />

              <span style={{ color: 'red' }} className={`text-red-600 text-xs error-message absolute top-10 ${errors?.businessName && touched?.businessName && 'visible'}`}>
                {errors?.businessName && touched?.businessName && errors?.businessName}
              </span>
            </div>
            <div>
              <input
                type="tel"
                id="number"
                name="number"
                className={styles.inputField}
                placeholder="Phone Number"
                value={values?.number}
                onChange={handleChange}
              />
              <span style={{ color: 'red' }} className={`text-red-600 text-xs error-message absolute top-10 ${errors?.number && touched?.number && 'visible'}`}>
                {errors?.number && touched?.number && errors?.number}
              </span>
            </div>
            <div>
              <div className={styles.box}>
                <p tabIndex={0}>Verification</p>
                <p tabIndex={1}>Enter your OTP code number:</p>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    className={styles.input}
                    style={{ width: "300px" }}
                  />
                  <button className={styles.verifyButton}>Verify</button>
                </div>
                <p className={styles.para}>Verification code is sent to this number:</p>
              </div>
            </div>
            <div className={styles.type_parent}>
              <div
                className={styles.business_type}
                onClick={() => setTypeToggle(!typeToggle)}
              >
                <h3>Business Type</h3>
                <Image
                  src="/arrow-down.png"
                  alt="arrow-down"
                  width={16}
                  height={16}
                />
              </div>
              {typeToggle && (
                <div>
                  <div className={styles.toggle_parent}>
                    <label htmlFor="regi">Registered</label>
                    <input type="radio" name="business" id="regi" />
                  </div>
                  <div className={styles.toggle_parent}>
                    <label htmlFor="unreg">Unregistered</label>{" "}
                    <input type="radio" name="business" id="unreg" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <input
                type="GST number"
                id="gstNumber"
                name="gstNumber"
                className={styles.inputField}
                placeholder="GST number"
                value={values?.gstNumber}
                onChange={handleChange}
              />

              <span style={{ color: 'red' }} className={`text-red-600 text-xs error-message absolute top-10 ${errors?.gstNumber && touched?.gstNumber && 'visible'}`}>
                {errors?.gstNumber && touched?.gstNumber && errors?.gstNumber}
              </span>
            </div>
            <div>
              <input
                type="Address"
                id="address"
                name="address"
                className={styles.inputField}
                placeholder="Address"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="Pin"
                id="pincode"
                name="pincode"
                className={styles.inputField}
                placeholder="Pin"
                onChange={handleChange}

              />
            </div>
            <div>
              <input
                type="City"
                id="city"
                name="city"
                className={styles.inputField}
                placeholder="City"
                onChange={handleChange}
              />
            </div>
            <div className={styles.country}>
              <select name="Country" id="Country" value={selectedCountry} onChange={handleCountryChange}>
                {countries?.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              <div className={styles.check}>
                <input
                  type="checkbox"
                  style={{ width: 12, height: 12 }}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p>
                  By signing up, I agree with the <span>Terms of Use</span> &{" "}
                  <span>Privacy Policy</span>
                </p>
              </div>
              <div className={styles.buttonn}>
                <button
                  type="submit"
                  className={styles.continuebutton}
                  style={{
                    backgroundColor: values?.businessName && values?.gstNumber && values?.number && isChecked ? "#ff9900" : "#ccc",
                    color: isChecked ? "#fbfbfb" : "#fbfbfb",
                    cursor: isChecked ? "pointer" : "not-allowed"
                  }}
                  disabled={!isChecked}
                >
                  Setup my business
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

const countries = ['India', 'USA', 'Canada', 'Australia', 'UK'];