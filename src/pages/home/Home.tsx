import React from 'react'
import Featured from './containers/featured/Featured'
import Matches from './containers/matches_section/Matches'
import MeetPlayers from './containers/meetPlayers/MeetPlayers'
import WinJersey from './containers/win_a_jersey/WinJersey'
import { Wrapper } from './style'

const Home = () => {
  return (
    <Wrapper>
      <Featured />
      <Matches />
      <MeetPlayers />
      <WinJersey />
    </Wrapper>
  )
}

export default Home
