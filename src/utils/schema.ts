import * as yup from "yup"

export const LoginSchema = yup.object().shape({
  email: yup.string().required("Email is Required"),
  phoneNumber: yup.string().required("Phone Number is Required"),
})
