import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        Developer Roadmap
      </div>
      <div className='menu'>
        <i className="fab fa-youtube"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fab fa-discord"></i>
      </div>
    </nav>
  );
}

export default Navbar;
