import { FormikErrors } from "formik"
import React, { FocusEvent } from "react"
import { InputStyled, InputWrapper } from "./style"
import { LoginFormType } from "../../utils/types"

type Props = {
  type: string
  value: string
  placeholder: string
  handleChange?: (
    se:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void
  name: string
  errors?: string
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
  touched?: boolean
}
const LoginInput = ({
  type,
  value,
  placeholder,
  handleChange,
  name,
  errors,
  touched,
  onBlur,
}: Props) => {
  return (
    <InputWrapper>
      <InputStyled
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      {errors && touched && <p>{errors}</p>}
    </InputWrapper>
  )
}

export default LoginInput
