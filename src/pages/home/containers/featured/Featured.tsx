import React from 'react'
import { Wrapper } from './style'

const Featured = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='stripes'>
          <div className='stripe'></div>
          <div className='stripe'></div>
          <div className='stripe'></div>
          <div className='text'>
            <h1>5</h1>
            <p>LEAGUE</p>
            <p>CHAMPIONSHIPS</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Featured
