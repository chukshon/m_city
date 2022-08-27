import React from 'react'
import {
  Wrapper,
  ContainerStyled,
  TextStyled,
  StripeStyled,
  StripesStyled,
  ImgStyled,
} from './style'
import featured_player from '../../../../assets/featured_player.png'

const Featured = () => {
  return (
    <Wrapper>
      <ContainerStyled>
        <StripesStyled>
          <StripeStyled></StripeStyled>
          <StripeStyled></StripeStyled>
          <StripeStyled></StripeStyled>
          <TextStyled>
            <h1>5</h1>
            <p>LEAGUE</p>
            <p>CHAMPIONSHIPS</p>
          </TextStyled>
          <ImgStyled src={featured_player} alt='' />
        </StripesStyled>
      </ContainerStyled>
    </Wrapper>
  )
}

export default Featured
