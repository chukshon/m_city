import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--blue-2);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
  }

  .nav_logo img {
    width: 60px;
    height: 60px;
  }

  .nav_menu {
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--white);
    font-size: 0.9rem;
  }

  .nav_link {
    background-color: none;
    cursor: pointer;
  }
`
