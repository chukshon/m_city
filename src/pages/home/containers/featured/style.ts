import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--blue-1);
  height: 400px;
  margin-top: -40px;
  overflow: hidden;
  position: relative;
  @media (min-width: 1100px) {
    height: 1010px;
  }
`

export const ContainerStyled = styled.div`
  @media (min-width: 1100px) {
    max-width: 1300px;
    overflow: hidden;
    height: 1000px;
    margin: 0 auto;
  }
`

export const StripesStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;
  @media (min-width: 1100px) {
    display: flex;
    justify-content: center;
    gap: 40px;
  }
`

export const StripeStyled = styled.div`
  width: 90px;
  height: 500px;
  background-color: var(--blue-2);
  transform: rotate(25deg);
  &:nth-child(2) {
    transform: rotate(25deg);
    background-color: var(--white);
  }
  @media (min-width: 1100px) {
    width: 250px;
    height: 1200px;
  }
`

export const TextStyled = styled.div`
  position: absolute;
  top: 30%;
  font-family: var(--ff-2);
  display: flex;
  flex-direction: column;
  gap: 0px;
  h1 {
    margin-left: 0px;
    font-size: 4rem;
    color: var(--white);
  }
  p {
    color: var(--white);
    background-color: var(--blue-1);
    margin-bottom: 10px;
    padding: 10px 10px;
    font-size: 2rem;
    z-index: 20;
    width: max-content;
  }
  @media (min-width: 1100px) {
    top: 30%;
    left: 280px;
    h1 {
      font-size: 15rem;
    }
    p {
      width: max-content;
      padding: 10px 20px;
      font-size: 6rem;
      &:nth-of-type(1) {
        margin-top: -48px;
      }
    }
  }
`
export const ImgStyled = styled.img`
  position: absolute;
  bottom: 150px;
  width: 200px;
  height: 200px;
  @media (min-width: 1100px) {
    position: absolute;
    bottom: 350px;
    right: 250px;
    width: 500px;
    height: 500px;
    z-index: 10;
  }
`
