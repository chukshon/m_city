import styled from 'styled-components'

import stripes from '../../../../assets/stripes.png'

export const Wrapper = styled.div`
  background-image: url(${stripes});
  padding: 50px 0px;
`

export const Container = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 600px) {
    padding: 0px 40px;
    flex-direction: row;
    gap: 0px;
  }
  @media (min-width: 1000px) {
    padding: 0px 100px;
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row;
    height: 600px;
  }
`

export const LeftCol = styled.div`
  padding: 50px 0px;
  height: 460px;
  width: 70%;
  display: flex;
`
export const RightCol = styled.div`
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  width: 30%;
  @media (max-width: 600px) {
    h2 {
      display: none;
    }
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    column-gap: 10px;
  }
  h2 {
    font-size: 3rem;
    font-family: var(--ff-2);
    color: var(--white);
    background-color: var(--blue-1);
    width: max-content;
    padding: 5px 10px;
    @media (min-width: 800px) {
      font-size: 4rem;
    }
    @media (min-width: 1000px) {
      font-size: 6rem;
    }
  }
  .button_col {
    width: 100%;
  }
`
