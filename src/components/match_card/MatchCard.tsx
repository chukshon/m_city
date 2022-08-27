import React from 'react'
import everton from '../../assets/team_icons/everton.png'
import tottenham from '../../assets/team_icons/tottenham.png'
import { Wrapper } from './style'
const MatchCard = () => {
  return (
    <Wrapper>
      <div className='date'>2022-01-01</div>
      <div className='result'>
        <div className='team_card'>
          <div className='details'>
            <img src={everton} alt='' />
            <h3>Everton</h3>
          </div>
          <div className='score'>
            <h1>1</h1>
          </div>
        </div>
        <div className='team_card'>
          <div className='details'>
            <img src={tottenham} alt='' />
            <h3>Tottenham</h3>
          </div>
          <div className='score'>
            <h1>1</h1>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default MatchCard
