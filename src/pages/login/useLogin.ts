import React from "react"
import { LoginSchema } from "../../utils/schema"
import { useFormik } from "formik"
import { LoginFormType, FormikActions } from "../../utils/types"

function useLogin() {
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
    actions.resetForm()
    alert("hello")
  }

  return { LoginFormik }
}

export default useLogin
