import React, { useRef } from "react";
import Navbar from "@/component/navbar";
import styles from "@/styles/setup-your-business.module.scss";
import ImageCropper from "@/component/image-cropper";
import { useImmer } from "use-immer";
import getExtension from "@/utils/get-extension";
import { checkDimensions } from "@/utils/dimensions";
import Image from "next/image";
import axios from "axios";
import RadioButtonGroup from "@/component/radio-button-text";
import Select from "react-select";
import { cities, countrie } from "@/utils/countryCity";
import useLoading from "@/hooks/use-loading";
import SpinnerView from "@/component/spinner";
import { on } from "events";
import { useRouter } from "next/router";
import { updateSetupNewBusiness, uploadCompanyPorfile } from "../../../network-requests/apis";
import { set } from "react-hook-form";
import { useSelector } from "react-redux";
import { getUserById } from "../../../network-requests/hooks/api";



const SetupYourBusiness = () => {
  const router = useRouter();
  const { id } = router.query;
  const selectedPackage = useSelector(
    (state: any) => state.package.selectedPackage
  );
  console.log("id",{ id });
    console.log("selectedPackage", { selectedPackage });
  const [typeToggle, setTypeToggle] = React.useState(false);
  const { loading, setLoading } = useLoading();
  const [state, setState] = useImmer({
    businessName: "",
    number: "",
    gstType: "",
    gstNumber: "",
    address: "",
    pincode: "",
    country: "",
    city: "",
  });
  console.log("state", { state });

  const onChangeState = React.useCallback(
    (key: keyof typeof state, value: any) => {
      setState((draft: typeof state) => {
        draft[key] = value;
      });
    },
    [setState]
  );

  //for user data
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
      void  getUserData();
    },[getUserData])

  //image croper start
  const imageCropperRef = useRef<HTMLInputElement>(null);
  const [croppedImage, setCroppedImage] = React.useState<any>(null);
  const [croppedImageBlob, setCroppedImageBlob] = React.useState<Blob | null>(
    null
  );
  const [avatarPreview, setAvatarPreview] = React.useState("");
  const [cropping, setCropping] = React.useState(false);
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

  // otp verification start
  const [verifyButton, setVerifyButton] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const [isVerified, setIsVerified] = React.useState(false);

  const handleOtpSend = React.useCallback(async () => {
    const otpPayload = {
      company_name: state?.businessName,
      phone_number: state?.number,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/send-sms`,
        {
          params: {
            company_name: state.businessName,
            to: state.number,
          },
        }
      );
      console.log("response", { response });
      if (response.data) {
        setVerifyButton(true);
      }
    } catch (error) {
      console.log("error", { error });
    }
  }, [state]);
  const handleVerifedOtp = React.useCallback(async () => {
    const varifed_payload = {
      phone: state?.number,
      enteredOTP: otp,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/verify-otp`,
        {
          varifed_payload,
        }
      );
      console.log("response", { response });

      if (response.data.status === "success") {
        setIsVerified(true);
      } else {
        alert("OTP is not correct");
      }
    } catch (error) {
      console.log("error", { error });
    }
  }, [otp]);

  // business data start
  const radioOptions = [
    { label: "Registered", value: "registered" },
    { label: "Unregistered", value: "unregistered" },
  ];

  // country and city
  const [selectCountry, setSelectCountry] = React.useState<{
    value: any;
    label: any;
  } | null>(null);
  const [selectedCity, setSelectedCity] = React.useState<{
    value: any;
    label: any;
  } | null>(null);
  console.log("selectedCity", selectedCity);

  const handleCountryChanged = (option: any) => {
    setSelectCountry(option);

    setSelectedCity(null);
    onChangeState("country", option.label);
  };

  React.useEffect(() => {
    if (selectedCity) {
      onChangeState("city", selectedCity.label);
    }
  }, [selectedCity]);

  // checkbox
  const [isChecked, setIsChecked] = React.useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRadioChange = (e: any) => {
    if (e.target.value === state.gstType) {
      setTypeToggle(!typeToggle);
    } else {
      onChangeState("gstType", e.target.value);
      setTypeToggle(!typeToggle);
    }
  };

  React.useEffect(() => {
    if (state.gstType === "unregistered") {
      setState((draft) => {
        draft.gstNumber = "";
      });
    }
  }, [state.gstType]);

  // payment process

  const payment_Payload = {
    amount: selectedPackage?.amount,
    productinfo: selectedPackage?.title,
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    email: userData?.email,
    phone: state?.number,
    address: state?.address,
    country:"India",
    zipCode: state?.pincode,
    city: state?.city,
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
    state,
    id,
    selectedPackage,
    
  ])


  // submit form
  const handleSubmit = React.useCallback(async()=>{

    try {
        // setLoading(true);
        const payload:any = {
            businessName: state.businessName,
            number: state.number,
            gstType: state.gstType,
            gstNumber: state.gstNumber,
            address: state.address,
            pincode: state.pincode,
            country: state.country,
            city: state.city,
        }
        console.log("payload", {payload})
        const profileUrl = croppedImage;
        const uploadImage = await uploadCompanyPorfile(profileUrl);
        console.log("uploadImage", {uploadImage})

        const response = await updateSetupNewBusiness(payload , id as string);
        console.log("response", {response})
        setLoading(false);
        if (response) { 
            if(selectedPackage?.title === "Free Account"){
              router.push("/free-package")
            localStorage.clear();
            }else{
            handlePayment();
            localStorage.clear();
            }
            
          }
        
    } catch (error) {
        console.log("error", {error})
    }

  },[ state, croppedImage, id , selectedPackage, setLoading, handlePayment ])

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h2>Almost done! Setup your business</h2>
        <div>
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
                  setFileMeta((draft: any) => {
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
              <p className={`${styles.addphototext} lg-mt-8 lg-mb-20`}>
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
                name="businessName"
                className={styles.inputField}
                placeholder="Company Name"
                value={state.businessName}
                onChange={({ target }) =>
                  onChangeState("businessName", target.value)
                }
              />
            </div>
            <div>
              <input
                type="tel"
                id="number"
                name="number"
                className={styles.inputField}
                placeholder="Phone Number"
                value={state.number}
                // only allow numbers to be entered in the input field
                onKeyPress={(e) => {
                  if (isNaN(Number(e.key))) {
                    e.preventDefault();
                  }
                }}
                onChange={({ target }) => onChangeState("number", target.value)}
              />
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
                    // onChange={(e) => setOtp(e.target.value)}

                    // only allow numbers to be entered in the input field and when is verified is true then don't allow to enter the value in the input field
                    onKeyPress={(e) => {
                      if (isNaN(Number(e.key))) {
                        e.preventDefault();
                      }
                    }}
                    onChange={(e) => {
                      if (isVerified) {
                        e.preventDefault();
                      } else {
                        setOtp(e.target.value);
                      }
                    }}
                  />
                  {verifyButton ? (
                    <>
                      {isVerified ? (
                        <>
                          &nbsp; &nbsp;{" "}
                          <Image
                            src="/verified-badge-fill.svg"
                            width={20}
                            height={20}
                            alt="check"
                          />
                        </>
                      ) : (
                        <>
                          <button
                            className={styles.verifyButton}
                            onClick={handleVerifedOtp}
                          >
                            Verifed
                          </button>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <button
                        className={styles.verifyButton}
                        onClick={handleOtpSend}
                        disabled={state.number.length !== 10}
                        style={{
                          backgroundColor:
                            state.number.length === 10 ? "#ff9900" : "#ccc",
                          color: "#fff",
                          cursor:
                            state.number.length === 10
                              ? "pointer"
                              : "not-allowed",
                        }}
                      >
                        Verify
                      </button>
                    </>
                  )}
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
                    name="gstType"
                    label="Business Type"
                    options={radioOptions}
                    selectedValue={state.gstType}
                    onChange={(e: any) => handleRadioChange(e)}
                  />
                </div>
              )}
            </div>
            {state?.gstType === "registered" && (
              <div>
                <input
                  type="GST number"
                  id="gstNumber"
                  name="gstNumber"
                  className={styles.inputField}
                  placeholder="GST number"
                  value={state.gstNumber}
                  onChange={({ target }) =>
                    onChangeState("gstNumber", target.value)
                  }
                />
              </div>
            )}

            <div>
              <input
                type="Address"
                id="address"
                name="address"
                className={styles.inputField}
                placeholder="Address"
              />
            </div>
            <div>
              <input
                type="Pin"
                id="pincode"
                name="pincode"
                className={styles.inputField}
                placeholder="Pin"
                value={state.pincode}
                onChange={({ target }) =>
                  onChangeState("pincode", target.value)
                }
              />
            </div>

            <div className="selectedCitystyle">
              <Select
                value={selectCountry}
                onChange={handleCountryChanged}
                options={countrie}
                placeholder="Select Country"
              />
               </div>
 
<div className="selectedCitystyle">
              <Select
                value={selectedCity}
                onChange={setSelectedCity}
                options={selectCountry ? cities[selectCountry.value] : []}
                placeholder="Select City"
                className={styles.city}
              />
              </div>
           

            <div className={styles.country}>
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
                {loading ? (
                  <>
                    <button
                      type="submit"
                      className={styles.continuebutton}
                      style={{
                        backgroundColor: "#ff9900",
                      }}
                    >
                      <SpinnerView size={16} loading={loading} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="submit"
                      className={styles.continuebutton}
                      style={{
                        backgroundColor:
                          state?.businessName &&
                          state?.gstType &&
                          state?.number &&
                          isChecked
                            ? "#ff9900"
                            : "#ccc",
                        color: isChecked ? "#fbfbfb" : "#fbfbfb",
                        cursor: isChecked ? "pointer" : "not-allowed",
                      }}
                      disabled={!isChecked}
                      onClick={handleSubmit}
                    >
                      Setup my business
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetupYourBusiness;
