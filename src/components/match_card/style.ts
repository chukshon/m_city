import styled from 'styled-components'

export const Wrapper = styled.div`
  /* max-width: 300px; */
  .date {
    margin-bottom: 20px;
    color: var(--white);
    font-family: var(--ff-2);
  }
  .result {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  .team_card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    height: 50px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .details {
    height: 100%;
    background-color: var(--white);
    width: 90%;
    display: flex;
    align-items: center;
    padding: 40px 30px 40px 10px;
    gap: 20px;
    h3 {
      font-family: var(--ff-2);
    }
    @media (min-width: 800px) {
      h3 {
        font-size: 1.8rem;
      }
    }
  }
  .score {
    color: var(--white);
    height: 100%;
    background-color: var(--blue-1);
    display: flex;
    align-items: center;
    padding: 40px;
  }
`
