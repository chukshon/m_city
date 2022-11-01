import React from "react"

function useLogin() {
  const loginFormInitialState = {
    email: "",
    password: "",
  }
  const [loginFormData, setLoginFormData] = React.useState(
    loginFormInitialState
  )
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    setLoginFormData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      }
    })
  }
  return { loginFormData, handleSubmit, handleChange }
}

export default useLogin
