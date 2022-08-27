import React from 'react'
import MatchCard from '../../../../components/match_card/MatchCard'
import { Wrapper, ContainerStyled, MatchGridStyled } from './style'
import { Link } from 'react-router-dom'

const Matches = () => {
  return (
    <Wrapper>
      <ContainerStyled>
        <h1 className='header'>Matches</h1>
        <MatchGridStyled>
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </MatchGridStyled>
        <Link to='/matches' className='veiw_all_button'>
          <button> View All Matches</button>
        </Link>
      </ContainerStyled>
    </Wrapper>
  )
}

export default Matches
