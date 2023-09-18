import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../src/grc.png'

const Navbar = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
        <div className='nav__container'>
          <img src={logo} className='icon' alt=''/>
          <h1>Crypto <span className='purple'>Tracker</span></h1>
        </div>
      </div>
    </Link>
  );
}

export default Navbar;
