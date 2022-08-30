import styled from 'styled-components'
import stripes from '../../assets/stripes.png'

export const Wrapper = styled.div`
  background-image: url(${stripes});
  padding: 100px 0px;
  background-size: 5px 5px;
`

export const Container = styled.div`
  padding: 0px 40px;
  @media (min-width: 1200px) {
    padding: 0px 100px;
    max-width: 1300px;
    margin: 0 auto;
  }
  h1 {
    color: var(--blue-3);
    font-family: var(--ff-2);
    font-size: 4rem;
    margin: 60px 0px;
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 5rem;
    }
  }
`

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 320px);
  justify-content: normal;
  gap: 20px;

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, 320px);
    justify-content: normal;
  }
  @media (min-width: 1110px) {
    grid-template-columns: repeat(3, 320px);
  }
`
