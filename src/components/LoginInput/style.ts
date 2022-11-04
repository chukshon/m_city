import styled from "styled-components"

export const InputWrapper = styled.div`
  p {
    margin-top: 10px;
    color: red;
  }
`

export const InputStyled = styled.input`
  background: var(--grey-4);
  border: 1px solid #e9e9e9;
  height: 40px;
  border-radius: 3px;
  padding-left: 10px;
  color: var(--black);
  font-weight: 300;
  &.error {
    border: 1px solid #f89687;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    &:focus {
      border: 1px solid red;
      box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #ffd3cc;
    }
  }
  &:focus {
    outline: none;
    border: 1px solid #84caff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
  }
`
