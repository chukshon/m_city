import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: var(--blue-2);
  padding: 50px 0px;
`

export const ContainerStyled = styled.div`
  padding: 40px 20px;
  .header {
    font-family: var(--ff-2);
    color: var(--white);
    font-size: 2rem;
    padding: 10px 10px;
    margin-bottom: 30px;
    background-color: var(--blue-1);
    width: max-content;
    @media (min-width: 750px) {
      font-size: 3rem;
      padding: 10px 10px;
      margin-bottom: 100px;
      background-color: var(--blue-1);
      width: max-content;
    }
  }
  .veiw_all_button {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  button {
    margin-top: 50px;
    background-color: var(--white);
    color: var(--blue-1);
    padding: 10px 10px;
    font-family: var(--ff-2);
    transition: ease 0.3s;

    &:hover {
      background-color: var(--blue-1);
      color: var(--white);
    }
  }
  @media (min-width: 750px) {
    padding: 0px 50px;
    max-width: 1200px;
    margin: 0 auto;
  }
`

export const MatchGridStyled = styled.div`
  display: grid;
  row-gap: 3rem;
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    row-gap: 3rem;
  }
`
