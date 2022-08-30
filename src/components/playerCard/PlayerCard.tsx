import React from 'react'
import { Wrapper, PlayerImage, PlayerDetails } from './style'
import Kompany from '../../assets/players/Vincent_Kompany.png'

const PlayerCard = () => {
  return (
    <Wrapper>
      <PlayerImage>
        <img src={Kompany} alt='' />
      </PlayerImage>
      <PlayerDetails>
        <p>Aymeric Laporte</p>
        <h2>20</h2>
      </PlayerDetails>
    </Wrapper>
  )
}

export default PlayerCard
