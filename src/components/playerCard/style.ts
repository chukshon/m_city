import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 30px;
  background-color: var(--white-1);
  border: 1px solid var(--grey-3);
  width: 100%;
`
export const PlayerImage = styled.div`
  border: 1px solid var(--grey-3);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue-4);
  max-width: 350px;
  padding: 0px 20px;
  img {
    width: 250px;
  }
`
export const PlayerDetails = styled.div`
  width: 100%;
  text-align: right;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  h2 {
    font-family: var(--ff-2);
    font-size: 6rem;
    color: var(--blue-3);
    align-self: flex-end;
    line-height: 80px;
  }
  p {
    align-self: flex-end;
    font-family: var(--ff-2);
    font-size: 1.5rem;
    max-width: 50px;
    z-index: 11;
  }
  @media (min-width: 700px) {
    h2 {
      z-index: 10;
      font-size: 10rem;
      line-height: 120px;
    }
  }
`
