import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import manchester_city_logo from '../../assets/logos/manchester_city_logo.png'

const Footer = () => {
  return (
    <Wrapper>
      <div className='container'>
        <Link to='/'>
          <img src={manchester_city_logo} alt='' className='footer_img' />
        </Link>
        <p className='copyright'>Manchester city 2022.All rights reserved</p>
      </div>
    </Wrapper>
  )
}

export default Footer
