import React from "react"
import LoginInput from "../../components/LoginInput/LoginInput"
import { Wrapper, ContainerStyled, FormStyled } from "./style"
import useLogin from "./useLogin"

const Login = () => {
  const { LoginFormik } = useLogin()
  return (
    <Wrapper>
      <ContainerStyled>
        <h1>Please Login</h1>
        <FormStyled onSubmit={LoginFormik.handleSubmit}>
          <LoginInput
            type="email"
            placeholder="Please input your email"
            value={LoginFormik.values.email}
            handleChange={LoginFormik.handleChange}
            name="email"
            errors={LoginFormik.errors.email}
            touched={LoginFormik.touched.email}
            onBlur={LoginFormik.handleBlur}
          />
          <LoginInput
            type="password"
            placeholder="Please input your password"
            value={LoginFormik.values.password}
            handleChange={LoginFormik.handleChange}
            name="password"
            errors={LoginFormik.errors.password}
            touched={LoginFormik.touched.password}
            onBlur={LoginFormik.handleBlur}
          />
          <button type="submit">Log in</button>
        </FormStyled>
      </ContainerStyled>
    </Wrapper>
  )
}

export default Login
