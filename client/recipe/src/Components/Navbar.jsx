import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import LoginPopup from './LoginPopup';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">Recipe Box</NavLink>
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search recipes..." />
        <button>Search</button>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" className="active">Home</NavLink></li>
        <li><NavLink to="/about" className="active">About</NavLink></li>
        <li><button className="login-btn" onClick={handleLoginButtonClick}>Log-In</button></li>
      </ul>
      {showLogin && <LoginPopup onClose={handleCloseLogin} />}
    </nav>
  );
}

export default Navbar;
