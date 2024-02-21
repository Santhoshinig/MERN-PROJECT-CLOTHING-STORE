import React from 'react'
import './Navbar.css'
import logo from '../../assets/newlogo.svg';
import navprofile from '../../assets/nav-profile.svg'
const Navbar = () =>  {
  return (
    <div className='navbar'>
       <img src={logo} alt='' className='nav-logo'/>
       <img src={navprofile} alt='' className='nav-profile'/>
    </div>
  )
}

export default Navbar