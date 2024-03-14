import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink  to="/">Recipe Box</NavLink>
      </div>
      
      <div className="search-bar">
        <input type="text" placeholder="Search recipes..." />
        <button>Search</button>
      </div>
      <ul className="nav-links">
        <li><NavLink  to="/" className="active">Home</NavLink></li>
        <li><NavLink to="/about" className="active">About</NavLink></li>
        <li><NavLink to="/signin" className="active">Log-In</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
