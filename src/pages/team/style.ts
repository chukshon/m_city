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
  gap: 20px;
`
