  import React from 'react';
  import { Link } from 'react-router-dom';
  import './Footer.css'; 

  function Footer() {
    return (
      <footer className="footer">
        <div className="box">
          <div className="row">
            <div className="column">
              <h3 className="feedback-heading">Feedback</h3>
              <p className="feedback-text">Your thoughts and feedback are crucial to help us improve.
              We'd be grateful if you could take a moment to share your insights with us.</p>
              <Link to="/feedback" className="feedback-btn">Give Feedback</Link>
            </div>
          </div>
          <hr className="hr" />
          <p className="copyright">&copy; 2024 Recipe Box. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  export default Footer;
