import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  gap: 40px;
`

export const SideBarStyled = styled.div`
  min-height: 100vh;
  background: #282828;
  border-right: 2px solid #01285e;
  ul {
    margin-top: 100px;
    width: 100%;
    text-align: center;
  }

  li {
    cursor: pointer;
    margin-bottom: 10px;
    color: #ffffff;
    font-weight: 300;
    border-bottom: 1px solid #353535;
    padding-bottom: 10px;
  }
`
export const OutletStyled = styled.div`
  margin-top: 100px;
`
