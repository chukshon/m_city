import React from "react"
import LoginInput from "../../components/LoginInput/LoginInput"
import { Wrapper, ContainerStyled, FormStyled } from "./style"
import useLogin from "./useLogin"

const Login = () => {
  const { loginFormData, handleSubmit, handleChange } = useLogin()
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
