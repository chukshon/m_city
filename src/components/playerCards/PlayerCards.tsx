import React from 'react'
import { Wrapper, PlayerCard, PlayerImage, PlayerDetails } from './style'
import Kompany from '../../assets/players/Vincent_Kompany.png'

const PlayerCards = () => {
  return (
    <Wrapper>
      <PlayerCard>
        <PlayerImage>
          <img src={Kompany} alt='' />
        </PlayerImage>
        <PlayerDetails>
          <h3>Nicholas Otamendi</h3>
          <h1>30</h1>
        </PlayerDetails>
      </PlayerCard>
      <PlayerCard>
        <PlayerImage>
          <img src={Kompany} alt='' />
        </PlayerImage>
        <PlayerDetails>
          <h3>Raheem Sterling</h3>
          <h1>30</h1>
        </PlayerDetails>
      </PlayerCard>
      <PlayerCard>
        <PlayerImage>
          <img src={Kompany} alt='' />
        </PlayerImage>
        <PlayerDetails>
          <h3>Kondo Sterling</h3>
          <h1>30</h1>
        </PlayerDetails>
      </PlayerCard>
    </Wrapper>
  )
}

export default PlayerCards
