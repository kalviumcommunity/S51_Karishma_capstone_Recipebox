import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

function CustomFooter() {
  return (
    <footer className="footer">
      <div className="box">
        <div className="row">
          <div className="column">
            <h3 className="feedback-heading">Feedback</h3>
            <p className="feedback-text">Send us your feedback.Your words  are important to us.</p>
            <Link to="/feedback" className="feedback-btn">Give Feedback</Link>
          </div>
        </div>
        <hr className="hr" />
        <p className="copyright">&copy; 2024 Recipe Box. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default CustomFooter;
