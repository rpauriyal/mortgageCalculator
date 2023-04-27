import React from 'react';
import './Header.css';
import logo from '../assets/tata-header-logo.svg';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      {/* <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="login">
        <button>Log In</button>
      </div> */}
      <nav className="sub-nav">
        <ul>
          <li><a href="#">Current Account</a></li>
          <li><a href="#">Mortgage</a></li>
          <li><a href="#">Savings &amp; ISA</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;