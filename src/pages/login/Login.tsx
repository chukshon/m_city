import React from "react"
import LoginInput from "../../components/LoginInput/LoginInput"
import { Wrapper, ContainerStyled, FormStyled } from "./style"

const Login = () => {
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

  return (
    <Wrapper>
      <ContainerStyled>
        <h1>Please Login</h1>
        <FormStyled onSubmit={handleSubmit}>
          <LoginInput
            type="email"
            placeholder="Please input your email"
            value={loginFormData.email}
            handleChange={handleChange}
            name="email"
          />
          <LoginInput
            type="password"
            placeholder="Please input your password"
            value={loginFormData.password}
            handleChange={handleChange}
            name="password"
          />
          <button type="submit">Log in</button>
        </FormStyled>
      </ContainerStyled>
    </Wrapper>
  )
}

export default Login
