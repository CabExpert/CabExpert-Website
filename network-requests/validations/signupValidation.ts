import * as Yup from "yup";

export const SignupValidationsSchema = () =>
  Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

export const setupNewBusinessValidationSchema = () =>
  Yup.object().shape({
    businessName: Yup.string().required("Company name is required"),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      // .min(10, 'Phone number must be at least 10 digits')
      // .max(10, 'Phone number can be maximum 10 digits')
      .required("Phone number is required"),
    gstNumber: Yup.string()
      .matches(
        /^[0-9A-Za-z]+$/,
        "GST number must contain only alphanumeric characters"
      )
      .length(15, "GST number must be exactly 15 characters")
      .required("GST number is required"),
  });

export const LeadsValidationsSchema = () =>
  Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Invalid phone number")
      .required("Number is required"),
  });
