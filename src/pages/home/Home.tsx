import React from 'react'
import Featured from './containers/featured/Featured'
import Matches from './containers/matches_section/Matches'
import { Wrapper } from './style'

const Home = () => {
  return (
    <Wrapper>
      <Featured />
      <Matches />
    </Wrapper>
  )
}

export default Home
