import React from "react"
import { LoginSchema } from "../../utils/schema"
import { useFormik } from "formik"
import { LoginFormType, FormikActions } from "../../utils/types"
import { useNavigate } from "react-router-dom"

function useLogin() {
  const navigate = useNavigate()
  const loginFormInitialState = {
    email: "",
    password: "",
  }
  const LoginFormik = useFormik({
    initialValues: loginFormInitialState,
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
  })
  function handleSubmit(values: LoginFormType, actions: FormikActions) {
    navigate("/dashboard")
  }

  return { LoginFormik }
}

export default useLogin
