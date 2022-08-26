import React from 'react'
import { Wrapper } from './style'
import { Link, NavLink } from 'react-router-dom'

import manchester_city_logo from '../../assets/logos/manchester_city_logo.png'

const Header = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='nav_logo'>
          <Link to='/'>
            <img src={manchester_city_logo} alt='' />
          </Link>
        </div>
        <div className='nav_menu'>
          <NavLink to='/team' className='nav_link'>
            THE TEAM
          </NavLink>
          <NavLink to='/matches' className='nav_link'>
            MATCHES
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}

export default Header
