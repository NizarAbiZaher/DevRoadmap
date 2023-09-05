import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        Developer Roadmap
      </div>
      <div className='menu'>
        <a href='https://www.youtube.com/@NizzyABI'><i className="fab fa-youtube"></i></a>
        <a href='https://twitter.com/NizzyABI'><i className="fa-brands fa-x-twitter"></i></a>
        <a href='https://discord.gg/te9MBNYq'><i className="fab fa-discord"></i></a>
      </div>
    </nav>
  );
}

export default Navbar;
