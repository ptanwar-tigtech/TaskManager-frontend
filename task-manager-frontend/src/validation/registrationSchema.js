import * as yup from "yup";

export const registrationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required"),

  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "Age must be at least 18")
    .required("Age is required"),
});