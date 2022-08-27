import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--blue-1);
  height: 400px;
  overflow: hidden;
  position: relative;
  .stripes {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  .stripe {
    width: 90px;
    height: 500px;
    background-color: var(--blue-2);
    transform: rotate(25deg);
    :nth-child(2) {
      transform: rotate(25deg);
      background-color: var(--white);
    }
  }
  .text {
    position: absolute;
    top: 30%;
    font-family: var(--ff-2);
    display: flex;
    flex-direction: column;
    gap: 0px;

    h1 {
      margin-left: 10px;
      font-size: 4rem;
      color: var(--white);
    }

    p {
      color: var(--white);
      background-color: var(--blue-1);
      margin-bottom: 10px;
      padding: 10px 10px;
      font-size: 2rem;
    }
  }
`
