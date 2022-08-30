import React from 'react'
import { ButtonStyled } from './style'

type ButtonProps = {
  text: string
  handleClick?: () => void
}

const Button = ({ text, handleClick }: ButtonProps) => {
  return <ButtonStyled onClick={handleClick}>{text}</ButtonStyled>
}

export default Button
