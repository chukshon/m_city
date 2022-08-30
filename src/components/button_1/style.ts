import styled from 'styled-components'
export const ButtonStyled = styled.button`
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

  @media (min-width: 700px) {
    font-size: 1.5rem;
  }
`
