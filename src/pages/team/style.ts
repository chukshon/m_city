import styled from 'styled-components'
import stripes from '../../assets/stripes.png'

export const Wrapper = styled.div`
  background-image: url(${stripes});
  padding: 150px 0px;
`

export const Container = styled.div`
  padding: 0px 40px;
`

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 320px);
  justify-content: center;
  gap: 20px;
  @media (min-width: 500px) {
    justify-content: normal;
  }
  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 320px);
    justify-content: normal;
  }
  @media (min-width: 1110px) {
    grid-template-columns: repeat(3, 320px);
  }
`
