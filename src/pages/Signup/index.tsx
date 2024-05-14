import Navbar from "@/component/navbar";
import styles from "@/styles/Signup.module.scss";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { SignupTypes } from "../../../network-requests/types";
import { SignupValidationsSchema } from "../../../network-requests/validations/signupValidation";
import { useAdminSignup } from "../../../network-requests/mutations";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { boolean } from "yup";

export default function Signup() {
  const router = useRouter();
  const selectedIsFreeAccount = router?.query;
  console.log({ selectedIsFreeAccount })

  const [isChecked, setIsChecked] = React.useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isFree: selectedIsFreeAccount?.freeAccount === 'true' || false,
      package: {
        packageName: selectedIsFreeAccount?.packageName as string
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

  return (
    <>
      <Navbar />
      <div className={`${styles.register} container `}>
        <h2>REGISTRATION</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <ToastContainer />
          <div className={styles.name}>
            <div>
              <input
                className={styles.half_width}
                type="text"
                placeholder="First Name"
                name="firstName"
                value={values?.firstName}
                onChange={handleChange}

              />
              <span
                style={{ color: "red" }}
                className={`text-red-600 text-xs error-message absolute top-10 ${errors?.firstName && touched?.firstName && "visible"
                  }`}
              >
                {errors?.firstName && touched?.firstName && errors?.firstName}
              </span>
            </div>
            <div>
              <input
                className={styles.half_width}

                type="text"
                id="LastName"
                name="lastName"
                placeholder="Last Name"
                value={values?.lastName}
                onChange={handleChange}
              />
              <span
                style={{ color: "red" }}
                className={`text-red-600 text-xs error-message absolute top-10 ${errors?.lastName && touched?.lastName && "visible"
                  }`}
              >
                {errors?.lastName && touched?.lastName && errors?.lastName}
              </span>
            </div>
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={values?.email}
              onChange={handleChange}
            />
            <span
              style={{ color: "red" }}
              className={`text-red-600 text-xs error-message absolute top-10 ${errors?.email && touched?.email && "visible"
                }`}
            >
              {errors?.email && touched?.email && errors?.email}
            </span>
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={values?.password}
              onChange={handleChange}
            />
            <span
              style={{ color: "red" }}
              className={`text-red-600 text-xs error-message absolute top-10 ${errors?.password && touched?.password && "visible"
                }`}
            >
              {errors?.password && touched?.password && errors?.password}
            </span>
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter Password"
              value={values?.confirmPassword}
              onChange={handleChange}
            />
            <span
              style={{ color: "red" }}
              className={`text-red-600 text-xs error-message absolute top-10 ${errors?.confirmPassword && touched?.confirmPassword && "visible"
                }`}
            >
              {errors?.confirmPassword &&
                touched?.confirmPassword &&
                errors?.confirmPassword}
            </span>

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
          </div>
          <button
            type="submit"
            className={styles.continuebutton}
            style={{
              backgroundColor: isChecked ? "#ff9900" : "#ccc",
              color: isChecked ? "#fbfbfb" : "#fbfbfb",
              cursor: isChecked ? "pointer" : "not-allowed"
            }}
            disabled={!isChecked}
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
}
