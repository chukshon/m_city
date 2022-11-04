import React, { FormEvent } from "react"
import { LoginSchema } from "../../utils/schema"
import { useFormik, FormikValues } from "formik"
import { LoginFormType } from "../../utils/types"

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
  const [loginFormData, setLoginFormData] = React.useState(
    loginFormInitialState
  )
  function handleSubmit(e: any) {
    e.preventDefault()
    console.log(loginFormData)
    setLoginFormData(loginFormInitialState)
  }

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.target.name
    const value = e.target.value
    setLoginFormData((prevalue: any) => {
      return {
        ...prevalue,
        [name]: value,
      }
    })
  }
  return { loginFormData, handleSubmit, handleChange, LoginFormik }
}

export default useLogin
