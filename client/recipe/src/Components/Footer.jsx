import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="box">
        <p>&copy; {new Date().getFullYear()} Recipe Box</p>
      </div>
    </footer>
  );
}

export default Footer;
