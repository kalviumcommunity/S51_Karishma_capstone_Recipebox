import React from 'react';
import './Feedback.css';

function Feedback() {
  return (
    <div className="feedback-box">
      <h1 className="feedback-head">We'd Love to Hear Your Feedback!</h1>
      
      <form className="feedback-form">
        <label className="feedback-label" htmlFor="feedback">Your Feedback:</label>
        <textarea className="feedback-input" id="feedback" name="feedback" rows="5" placeholder="Enter your feedback here..." required></textarea>
        <p className="feedback-text">Thank you for using Recipe Box. Your feedback helps us improve our platform.</p>
        <button className="submit-feedback" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;
