import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/' className='navItems'>Home</Link>
        <Link to='/songs' className='navItems'>Songs</Link>
        <Link to='/artist' className='navItems'>Artists</Link>
    </div>
  )
}

export default Navbar