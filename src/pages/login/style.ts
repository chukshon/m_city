import styled from "styled-components"

export const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerStyled = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 500px;
  max-width: 400px;
  width: 100%;
  h1 {
    text-align: center;
    color: var(--blue-2);
    font-family: var(--ff-2);
    font-size: 50px;
  }
`

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* max-width: 1000px;
  width: 100%; */
`
