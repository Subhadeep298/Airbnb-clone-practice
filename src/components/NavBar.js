import React from 'react'
import logo from '../images/airbnb.png'

const NavBar = () => {
  return (
    <nav>
        <img className='logo' src={logo} alt="Airbnb"/>
    </nav>
  )
}

export default NavBar