import React from "react"
import { InputStyled, InputWrapper } from "./style"

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
}
const LoginInput = ({
  type,
  value,
  placeholder,
  handleChange,
  name,
}: Props) => {
  return (
    <InputWrapper>
      <InputStyled
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <p>This {name} is Required</p>
    </InputWrapper>
  )
}

export default LoginInput
