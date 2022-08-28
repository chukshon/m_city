import React from 'react'
import { Wrapper, Container, LeftCol, PlayerCard } from './style'

const MeetPlayers = () => {
  return (
    <Wrapper>
      <Container>
        <LeftCol>
          <PlayerCard>
            <div className='image'></div>
            <div className='content'>
              <h1>30</h1>
              <h3>Nicholas Otamendi</h3>
            </div>
          </PlayerCard>
        </LeftCol>
      </Container>
    </Wrapper>
  )
}

export default MeetPlayers
