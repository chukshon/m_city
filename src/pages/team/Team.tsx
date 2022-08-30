import React from 'react'
import PlayerCard from '../../components/playerCard/PlayerCard'
import { Wrapper, Container, CategoryGrid } from './style'

const Team = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Keepers</h1>
        <CategoryGrid>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </CategoryGrid>
        <h1>Defenders</h1>
        <CategoryGrid>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </CategoryGrid>
      </Container>
    </Wrapper>
  )
}

export default Team
