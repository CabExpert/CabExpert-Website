import Navbar from "@/component/navbar";
import styles from "@/styles/setup-your-business.module.scss";
import Image from "next/image";
import Select from 'react-select';
import React, { useRef, useState } from "react";
import { useFormik , Field } from "formik";
import { SetupYourBusiness } from "../../../network-requests/types";
import { setupNewBusinessValidationSchema } from "../../../network-requests/validations/signupValidation";
import { useRouter } from "next/router";
import {
  sendOtp,
  updateSetupNewBusiness,
  uploadCompanyPorfile,
} from "../../../network-requests/apis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { getUserById } from "../../../network-requests/hooks/api";
import useLoading from "@/hooks/use-loading";
import SpinnerView from "@/component/spinner";
import { cities, countrie } from "@/utils/countryCity";
import ImageCropper from "@/component/image-cropper";
import { useImmer } from "use-immer";
import getExtension from "@/utils/get-extension";
import { checkDimensions } from "@/utils/dimensions";
import RadioButtonText from "@/component/radio-button-text";
import RadioButtonGroup from "@/component/radio-button-text";


 

export default function Setup() {
  const [typeToggle, setTypeToggle] = useState(false);
  const router = useRouter(); 
  const { loading, setLoading } = useLoading();

  const { id } = router.query;
  console.log({ id });
  
  const selectedPackage = useSelector(
    (state: any) => state.package.selectedPackage
  );
  console.log("selectedPackage",{ selectedPackage });

  const [isChecked, setIsChecked] = React.useState(false); 

  

  
const radioOptions = [
  { label: 'Registered', value: 'registered' },
  { label: 'Unregistered', value: 'unregistered' },
];

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [companyLogo, setCompanyLogo] = React.useState("");
  const [selectedProfile, setSelectedProfile] = React.useState("");

  const imageCropperRef = useRef<HTMLInputElement>(null);
  const [croppedImageBlob, setCroppedImageBlob] = useState<Blob | null>(null);

  const [croppedImage, setCroppedImage] = useState<any>(null); 
  console.log("croppedImage", {croppedImage});
  
    const [avatarPreview, setAvatarPreview] = useState(""); 
  const [cropping, setCropping] = useState(false);


  


  const [fileMeta, setFileMeta] = useImmer({
    name: "",
    size: 0,
    type: "",
    extension: ".png",
    file: null,
  });

  const handleAvatarClick = () => {
    imageCropperRef.current?.click();
  };

  const handleCancel = () => {
    const confirmCancel = confirm("Are you sure you want to cancel?");
    if (confirmCancel) {
      setAvatarPreview("");
      setCropping(false);
      setCroppedImage(null);
    } else {
      return;
    }
  };

  console.log("croppedImage", {croppedImage});

  const handleUploadClick: any = () => {
    if (fileInputRef.current) {
      fileInputRef?.current?.click();
    }
  };

  const [selectCountry, setSelectCountry] = useState<{ value: any; label: any } | null>(null);
  const [selectedCity, setSelectedCity] = useState<{ value: any; label: any } | null>(null);


  console.log("selectCountry",{selectCountry})
  console.log("selectedCity",{selectedCity})

  const handleCountryChanged = (option: any) => {
    setSelectCountry(option);
    setSelectedCity(null);
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
      // city: "",
      country: "",
      verificationCode: "",
      pincode: "",
      // profile: "",
    } as SetupYourBusiness,

    validationSchema: setupNewBusinessValidationSchema(),
    onSubmit: (values: SetupYourBusiness) => {
      console.log({ values }, "values");
      onSetupNewBusiness(values, id);
    },
  });

  const { values, errors, handleChange, handleSubmit, touched } = formik;

  console.log({ values });

  const [selectedCountry, setSelectedCountry] = useState(selectCountry?.label ? selectCountry?.label : "");
  const handleCountryChange = (e: any) => {
    setSelectedCountry(e.target.value);
  };
  // console.log({ selectedCountry })

  const onSetupNewBusiness = async (
    values: any,
    id: string | string[] | undefined
  ) => {
    setLoading(true);
    try {
      // const [profileUrl] = await Promise.all([
      //   Promise.all(
      //     Object.values(selectedProfile)?.map((imageInfo) =>
      //       uploadCompanyPorfile(imageInfo)
      //     )
      //   ),
      // ]);

      // need to set profile image url on uploadCompanyPorfile function 
      const profileUrl = croppedImage;
      console.log("profileUrl", { profileUrl });

      const onUploadImage  = await uploadCompanyPorfile(profileUrl);
      console.log("onUploadImage",{onUploadImage});


      console.log("ON SETUP NEW BUSINESS", { values }); 
      const customPayload = {
        ...values,
        city: selectedCity?.label ? selectedCity?.label : values?.city,
        country: selectCountry?.label ? selectCountry?.label : "",
        profile: profileUrl ? profileUrl : "",
      };
      console.log("customPayload",{ customPayload });
      const response = await updateSetupNewBusiness(
        customPayload,
        id as string
      );
      console.log("response",{ response });
      if (response) {
        toast.success("Successfully setup your business");
        if(selectedPackage?.title === "Free Account"){
          router.push("/free-package")
        localStorage.clear();
        }else{
        handlePayment();
        localStorage.clear();
        }
        
      }
    } catch (error: any) {
      console.log({ error });
      toast.error(error?.response?.data?.message);
    }
  };

  // payment module integration

  const [userData , setUserData] = React.useState<any>([]);
  const getUserData = React.useCallback(async()=>{
    try {
      const response = await getUserById(id as string);
      console.log("data res",{response});
      setUserData(response);
      
    } catch (error) {
      console.log("error",{error});
    }
  }
  ,[id])

  React.useEffect(()=>{
    getUserData();
  }
  ,[getUserData])

  console.log("userData",{userData})
  console.log("id",{id})


    const payment_Payload = {
      amount: selectedPackage?.amount,
      productinfo: selectedPackage?.title,
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      email: userData?.email,
      phone: values?.number,
      address: values?.address,
      country:"India",
      zipCode: values?.pincode,
      city: values?.city,
      currency: "INR",
      receipt: "order_rcptid_11",
      payment_capture: "1",
      bookingId: "12323",
      userId: id,

    };


    const handlePayment = React.useCallback(async()=>{

     
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/payment`,payment_Payload);
        console.log("res",{response});

        const data = response.data;
        console.log("data",{data});

        const payU_result:any = {
          key: data?.key,
          txnid: data?.txnid,
          amount: data?.amount,
          productinfo: data?.productinfo,
          firstName: data?.firstName,
          lastName: data?.lastName,
          address2: data?.address2,
          zipcode: data?.zipcode,
          email: data?.email,
          phone: data?.phone,
          address1: data?.address1,
          city: data?.city,
          state: data?.state,
          country: data?.country,
          udf1: data?.udf1,
          udf2: data?.udf2,
          surl: `${data?.surl}?bookingId=${data?.bookingId}`,
          furl: `${data?.furl}?bookingId=${data?.bookingId}`,
          hash: data?.hashValue,
        }

        console.log("payU_result",{payU_result});
        const form = document.createElement('form');
        form.setAttribute("method", "POST");
        form.setAttribute("action", "https://secure.payu.in/_payment");
  
        Object.keys(payU_result).forEach((key) => {
          const input = document.createElement("input");
          input.setAttribute("type", "hidden");
          input.setAttribute("name", key);
          input.setAttribute("value", payU_result[key]);
          form.appendChild(input);
        });
  
        document.body.appendChild(form);
        form.submit();
        
      } catch (error) {
        console.log("error",{error});
        
      }

    },[
      payment_Payload,
      userData,
      values,
      id,
      selectedPackage,
      
    ])


    console.log("values check",{values})
 


    const handleRadioChange = (e: any) => {  
      if(e.target.value === values?.gstType){
        setTypeToggle(!typeToggle);
      }else {
        handleChange(e);
        setTypeToggle(!typeToggle);
      }
      

    }
    
    React.useEffect(()=>{
      // if values.gsttype is equal to unregistered then set gstNumber to empty string 
      if (values?.gstType === "unregistered") {
        formik.setFieldValue("gstNumber", "");
      }
    },[values?.gstType])
    
    const [verifyButton, setVerifyButton] = React.useState(false);
    const [otp, setOtp] = React.useState("");


    // send otp 
  const handleOtpSend = React.useCallback(async()=>{

    const otpPayload = {
      company_name : values?.businessName,
      phone_number : values?.number,
    }

    try { 
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/send-sms`, {
        params :{
          company_name : values.businessName,
          to: values.number,
        }
      });
      console.log("response",{response});
      if(response.data){
        toast.success("Otp send successfully");
        setVerifyButton(true);
      }
      
    } catch (error) {
      console.log("error",{error});
      
    }

  },[
    values,
  ])

  console.log("otp",{otp})

  // verify otp 
  const handleVerifedOtp = React.useCallback(async()=>{

    const varifed_payload = {
      phone : values?.number,
      enteredOTP:otp
    }
  

    try { 
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/verify-otp`, {
        varifed_payload
      } );
      console.log("response",{response});
      if(response.data){
        toast.success("Otp verified successfully");
        setVerifyButton(false);
      }

      
    } catch (error) {
      console.log("error",{error});
      
    }

  },[
    values,
    otp
  ])



  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Almost done! Setup your business</h2>
        <div>
          <ToastContainer />
        </div>
        <form onSubmit={handleSubmit}>
          {/* <div className={styles.logoUpload}>

            {companyLogo ? (
              <label htmlFor="logo">
                <Image
                  src={companyLogo}
                  alt="Company Logo"
                  width={56}
                  height={72}
                />
              </label>
            ) : (
              <label htmlFor="logo">
                <Image
                  src="/company_logo_placeholder.png"
                  alt="Company Logo"
                  width={56}
                  height={72}
                />
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
          </div> */}
           <div
                          className={styles.avtarbox}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                        >
                          <div className="d-flex flex-column">
                            <ImageCropper
                              ref={imageCropperRef}
                              maxSize={5}
                              image={croppedImage}
                              onCrop={(data) => setCroppedImage(data as string)}
                              onCropBlob={(data) => setCroppedImageBlob(data)}
                              onSelectFile={async (file) => {
                                setFileMeta((draft:any) => {
                                  draft.name = file.name;
                                  draft.type = file.type;
                                  draft.size = file.size;
                                  draft.extension = getExtension(file.name);
                                  draft.file = file;
                                });

                                if (file) {
                                  Object.defineProperty(file, "dimensions", {
                                    value: await checkDimensions(file),
                                  });
                                }
                              }}
                            >
                              <div
                                className={styles.addphoto}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  cursor: "pointer",
                                }}
                              >
                                {!croppedImage ? (
                                  <Image
                                    src="/company_logo_placeholder.png"
                                    alt="fav"
                                    height={70}
                                    width={70}
                                  />
                                ) : (
                                  <Image
                                    src={croppedImage}
                                    width={70}
                                    height={70}
                                    className={styles.userimageicon}
                                    alt="avatar"
                                  />
                                )}
                              </div>
                            </ImageCropper>
                            <p
                              className={`${styles.addphototext} lg-mt-8 lg-mb-20`}
                            >
                              {croppedImage ? (
                                <div className="d-flex align-items-center justify-content-center gap-16">
                                  <a
                                    className="label-medium primary_color"
                                    onClick={handleAvatarClick}
                                    style={{ cursor: "pointer" }}
                                  >
                                    Edit &nbsp;
                                  </a>
                                  <a
                                    className="label-medium  danger-color"
                                    onClick={handleCancel}
                                    style={{ cursor: "pointer" }}

                                  >
                                    Delete
                                  </a>
                                </div>
                              ) : (
                                <a
                                  className="label-medium primary_color"
                                  onClick={handleAvatarClick}
                                >
                                    Add Photo
                                </a>
                              )}
                            </p>
                          </div>
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

              <span
                style={{ color: "red" }}
                className={`text-red-600 text-xs error-message absolute top-10 ${
                  errors?.businessName && touched?.businessName && "visible"
                }`}
              >
                {errors?.businessName &&
                  touched?.businessName &&
                  errors?.businessName}
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
              <span
                style={{ color: "red" }}
                className={`text-red-600 text-xs error-message absolute top-10 ${
                  errors?.number && touched?.number && "visible"
                }`}
              >
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
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  {verifyButton ? <>
                    <Image
                      src="/verified-badge-fill.svg"
                      width={20}
                      height={20}
                      alt="check"
                    />
                    <button className={styles.verifyButton} 
                  onClick={handleVerifedOtp}
                  >Verifed</button>
                  </> : <> 
                  
                    <button className={styles.verifyButton} 
                  onClick={handleOtpSend}
                  >Verify test</button>
                   </>}
                  
                </div>
                <p className={styles.para}>
                  Verification code is sent to this number:
                </p>
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
                 <RadioButtonGroup 
                 options={radioOptions}
                 label={"Business Type"}
                 name={"gstType"}
                 selectedValue={values?.gstType}
                 onChange={(e:any) => handleRadioChange(e)} 
                  />

                  
                  
                </div>
              )}
            </div>
            {values?.gstType === "registered" && (
             
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

              <span
                style={{ color: "red" }} 
                className={`text-red-600 text-xs error-message absolute top-10 ${
                  errors?.gstNumber && touched?.gstNumber && "visible"
                }`}

              > 
              {values?.gstType === "registered" && errors?.gstNumber && touched?.gstNumber && errors?.gstNumber}
              {/* {errors?.gstNumber && touched?.gstNumber && errors?.gstNumber} */}
              </span>
            </div>
            )}
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

            {/* // new city and country start */}
            <div>
      <Select
        value={selectCountry}
        onChange={handleCountryChanged}
        options={countrie}
        placeholder="Select Country"
      />
      
        <Select
          value={selectedCity}
          onChange={setSelectedCity}
          options={selectCountry ? cities[selectCountry.value] : []}
          placeholder="Select City"
          className={styles.city}
        />
   
    </div>
            {/* // new city and country end */}


            {/* <div>
              <input
                type="City"
                id="city"
                name="city"
                className={styles.inputField}
                placeholder="City"
                onChange={handleChange}
              />
            </div> */}
            <div className={styles.country}>
              {/* <select
                name="Country"
                id="Country"
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                {countries?.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select> */}
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
                {loading ? <>
                  <button
                  type="submit"
                  className={styles.continuebutton} 
                  style={{
                    backgroundColor: "#ff9900",
                  }}
                >
                <SpinnerView size={16} loading={loading} />
                </button>
                </> : <>
                <button
                  type="submit"
                  className={styles.continuebutton}
                  style={{
                    backgroundColor:
                      values?.businessName && 
                      values?.gstType && 
                      values?.number &&
                      isChecked
                        ? "#ff9900"
                        : "#ccc",
                    color: isChecked ? "#fbfbfb" : "#fbfbfb",
                    cursor: isChecked ? "pointer" : "not-allowed",
                  }}
                  disabled={!isChecked}
                >
                  Setup my business
                </button>
                </>}
               
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

const countries = ["India", "USA", "Canada", "Australia", "UK"];

 


