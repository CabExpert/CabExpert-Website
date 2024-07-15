import Navbar from "@/component/navbar";
import styles from "@/styles/Signup.module.scss";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { SignupTypes } from "../../../network-requests/types";
import { SignupValidationsSchema } from "../../../network-requests/validations/signupValidation";
import { useAdminSignup } from "../../../network-requests/mutations";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { boolean } from "yup";
import TermsAndCondition from "@/component/terms-and-condition/terms-and-condition";
import PrivacyPolicy from "@/component/privacy-policy/privacy-policy";
import Inputfield from "@/component/inputfield";

interface PackageValue {
  title: string;
  duties: string;
  cost: string;
  paymentDate: Date;
}

export default function Signup() {
  const router = useRouter();
  const selectedIsFreeAccount = router?.query;
  console.log({ selectedIsFreeAccount });

  const [packageValue, setPackageValue] = useState<PackageValue | null>(null);
  const [isChecked, setIsChecked] = React.useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  console.log({ packageValue });
  console.log(packageValue?.title);

  React.useEffect(() => {
    const storedValue = localStorage.getItem("package");
    if (storedValue) {
      setPackageValue(JSON.parse(storedValue) as PackageValue);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isFree: selectedIsFreeAccount?.freeAccount === "true" || false,
      package: {
        packageName: selectedIsFreeAccount?.packageName,
      },
    } as SignupTypes,

    validationSchema: SignupValidationsSchema(),
    onSubmit: (values: SignupTypes) => {
      console.log({ values }, "values");
      handleSubmitSignupData(values);
    },
  });

  const { mutate } = useAdminSignup();
  const [data, setData] = React.useState("");

  const handleSubmitSignupData = async (values: any) => {
    if (
      !values.package.packageName &&
      !values?.package.perMonthDuties &&
      !values?.package?.packageAmount
    ) {
      values.package.packageName = packageValue?.title || "";
      values.package.perMonthDuties = packageValue?.duties || "";
      values.package.packageAmount = packageValue?.cost || "";
      values.package.paymentDate = new Date();
    }

    console.log("IN HANDLE SUBMIT FUNCTION", { values });
    await mutate(values, {
      onSuccess: (res) => {
        console.log("data", { res });
        if (res.success) {
          setData(res);
          console.log(res, "res");
          toast.success("Successfully signup");
          router.push({
            pathname: "/Setup-your-business",
            query: { id: res?.data?.id },
          });
        }
      },
      onError: (res: any) => {
        console.log("ERROR in Signup", { res });
        toast.error(res?.response?.data?.message);
      },
    });
  };

  const { values, errors, handleChange, handleSubmit, touched } = formik;

  console.log({ values });

  const [popup, setPopup] = useState("");
  // console.log(popup, "popup");

  return (
    <>
      <Navbar />
      <div className={`${styles.register} container `}>
        <h2>REGISTRATION</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <ToastContainer />
          <div className={styles.name}>
            <div className={styles.inputone}>
              <div>
                <Inputfield
                  name="firstName"
                  type="text"
                  label="First name"
                  placeholder="Input first name"
                  onChange={(e: any) => handleChange(e)}
                  value={values.firstName}
                />
                <span
                  style={{ color: "red", marginTop: "-11px", fontSize: "15px" }}
                  className={`  ${
                    errors?.firstName && touched?.firstName && "visible"
                  }`}
                >
                  {errors?.firstName && touched?.firstName && errors?.firstName}
                </span>
              </div>
              <div>
                <Inputfield
                  name="lastName"
                  type="text"
                  label="Last name"
                  placeholder="Input last name"
                  value={values.lastName}
                  onChange={(e: any) => handleChange(e)}
                />
                {""}

                <span
                  style={{ color: "red", marginTop: "-11px", fontSize: "15px" }}
                  className={`  ${
                    errors?.lastName && touched?.lastName && "visible"
                  }`}
                >
                  {errors?.lastName && touched?.lastName && errors?.lastName}
                </span>
              </div>
            </div>
          </div>

          <div>
            <Inputfield
              name="email"
              type="email"
              label="Email address"
              placeholder="example.email@gmail.com"
              onChange={(e: any) => handleChange(e)}
              value={values.email}
            />
            <span
              style={{ color: "red", marginTop: "-11px", fontSize: "15px" }}
              className={`  ${errors?.email && touched?.email && "visible"}`}
            >
              {errors?.email && touched?.email && errors?.email}
            </span>
          </div>

          {/* <div>
            <input
              type="email"
              id="email"
              name="email"              
              placeholder="Email Address"
              value={values?.email}
              onChange={handleChange}
            />{" "}
            <br />
            <span
              style={{ color: "red" }}
              className={`text-red-600 text-xs error-message absolute top-10 ${
                errors?.email && touched?.email && "visible"
              }`}
            >
              {errors?.email && touched?.email && errors?.email}
            </span>
          </div> */}
          <div>
            <Inputfield
              type="password"
              id="password"
              label="Password"
              name="password"
              placeholder="Password"
              value={values?.password}
              onChange={handleChange}
            />{" "}
            <span
              style={{ color: "red", marginTop: "-11px", fontSize: "15px" }}
              className={`  ${
                errors?.password && touched?.password && "visible"
              }`}
            >
              {errors?.password && touched?.password && errors?.password}
            </span>
          </div>
          <div>
            {/* <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter Password"
              value={values?.confirmPassword}
              onChange={handleChange}
            />{" "} 
            <br />*/}
            {/* <span
              style={{ color: "red" }}
              className={`text-red-600 text-xs error-message absolute top-10 ${
                errors?.confirmPassword && touched?.confirmPassword && "visible"
              }`}
            >
              {errors?.confirmPassword &&
                touched?.confirmPassword &&
                errors?.confirmPassword}
            </span> */}
            <div className={styles.check}>
              <input
                type="checkbox"
                style={{ width: 16, height: 16, cursor: "pointer" }}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <p>
                By signing up, I agree with the{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setPopup("term")}
                >
                  Terms of Use
                </span>{" "}
                &{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setPopup("policy")}
                >
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
          <button
            type="submit"
            className={styles.continuebutton}
            style={{
              backgroundColor:
              values?.firstName &&
              values?.lastName &&
                values?.email &&
                values?.password &&
                // values?.confirmPassword &&
                isChecked
                  ? "#ff9900"
                  : "#ccc",
              color: isChecked ? "#fbfbfb" : "#fbfbfb",
              cursor: isChecked ? "pointer" : "not-allowed",
            }}
            disabled={!isChecked}
          >
            Continue
          </button>
        </form>
        {popup === "term" && (
          <div className={styles.privacyPopup}>
            <div className={styles.popupChild} style={{ position: "relative" }}>
              <TermsAndCondition />
              <div className={styles.closeIcon} onClick={() => setPopup("")}>
                <span>x</span>
              </div>
            </div>
          </div>
        )}
        {popup === "policy" && (
          <div className={styles.privacyPopup}>
            <div className={styles.popupChild} style={{ position: "relative" }}>
              <PrivacyPolicy />
              <div className={styles.closeIcon} onClick={() => setPopup("")}>
                <span>x</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
