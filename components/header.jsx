import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id='snap' className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#snap">Home</a></li>
          <li><a href="#product-row">Shop</a></li>
          <li><a href="#las">About</a></li>
          <li><a href="#tele">Contact</a></li>
        </ul>
      </nav>

      <div className="header-icons">
        <Link to="/sign">
          <img src="/Find-Your-Perfect-Dog-Breed/images/logo/login.png" className="iconn" alt="Login Icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
