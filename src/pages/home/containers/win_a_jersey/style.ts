import styled from 'styled-components'

export const Wrapper = styled.div``

export const Container = styled.div`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1000px) {
    padding: 50px 150px;
    max-width: 1360px;
    margin: 0 auto;
  }
`

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  img {
    width: 300px;
    height: 300px;
  }
  h1 {
    font-size: 3rem;
    font-family: var(--ff-2);
    color: var(--blue-3);
    max-width: 1000px;
  }
  @media (min-width: 700px) {
    flex-direction: row;
    h1 {
      display: flex;
      flex-wrap: wrap;
      max-width: 300px;
      font-size: 5rem;
    }
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    h1 {
      display: flex;
      flex-wrap: wrap;
      max-width: 1000px;
      font-size: 8rem;
      line-height: 120px;
      letter-spacing: 0.7rem;
    }
  }
`

export const EnterEmailSection = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  h2 {
    font-family: var(--ff-2);
    color: var(--grey-2);
  }
  form {
    width: 100%;
  }
  input {
    max-width: 500px;
    height: 40px;
    border: 1px solid var(--grey-3);
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 0px 10px;
    &::placeholder {
      text-align: center;
      color: #cecece;
    }
    &:focus {
      outline: none;
      border: 2px solid blue;
    }
  }

  button {
    background-color: var(--blue-1);
    color: var(--white);
    text-align: center;
    padding: 7px 15px;
    border-radius: 3px;
  }
  p {
    max-width: 500px;
    font-weight: 300;
  }
`
