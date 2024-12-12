import * as Yup from "yup";

const ukPhoneNumberRegex = /^(?:0|\+44)(?:7\d{9}|1\d{9,10}|2\d{9,10})$/;


// Yup validation schema
export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be 50 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^(?!.*\.(com|in)\.(com|in)).*$/,
      'Please use correct email'
    ),
  mobile: Yup.string()
    .matches(ukPhoneNumberRegex, "Invalid phone number")
    .required("Phone number is required"),
});