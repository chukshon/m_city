import styled from "styled-components"

export const InputWrapper = styled.div``

export const InputStyled = styled.input`
  background: var(--grey-4);
  border: 1px solid #e9e9e9;
  height: 40px;
  border-radius: 3px;
  padding-left: 10px;
  color: var(--black);
  font-weight: 300;

  &:focus {
    border: 1px solid var(--blue-2);
  }
`
