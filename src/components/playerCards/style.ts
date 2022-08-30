import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PlayerCard = styled.div`
  position: absolute;
  /* display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center; */
  padding: 10px;
  background-color: var(--white-1);
  border: 1px solid var(--grey-3);
  z-index: 80;
  &:nth-child(2) {
    z-index: 70;
    transform: translateY(-50px) translateX(40px);
  }
  &:nth-child(3) {
    z-index: 40;
    transform: translateY(-70px) translateX(80px);
  }
  @media (min-width: 800px) {
    max-width: 600px;
    &:nth-child(2) {
      transform: translateY(-50px) translateX(100px);
    }
    &:nth-child(3) {
      transform: translateY(-70px) translateX(200px);
    }
  }

  @media (min-width: 1200px) {
    max-width: 600px;
    &:nth-child(2) {
      transform: translateY(-50px) translateX(130px);
    }
    &:nth-child(3) {
      transform: translateY(-70px) translateX(230px);
    }
  }
`

export const PlayerImage = styled.div`
  border: 1px solid var(--grey-3);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-4);
  max-width: 300px;
  padding: 0px 20px;
  @media (min-width: 800px) {
    max-width: 600px;
    img {
      width: 200px;
    }
  }
  @media (min-width: 1200px) {
    max-width: 600px;
    img {
      width: 300px;
    }
  }
`

export const PlayerDetails = styled.div`
  position: relative;
  h1 {
    color: var(--blue-3);
    right: 0px;
    top: 0px;
    font-size: 10rem;
    text-align: right;
    font-family: var(--ff-2);
    padding: 0px;
    margin: 0px;
    line-height: 160px;
  }

  h3 {
    position: absolute;
    bottom: 15px;
    max-width: 50px;
    font-family: var(--ff-2);
    font-size: 1.3rem;
  }
  @media (min-width: 1200px) {
    h1 {
      line-height: 180px;
      font-size: 12rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`
