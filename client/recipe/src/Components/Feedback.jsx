import React from 'react';
import './Feedback.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Feedback() {
  const [feedback, setFeedback] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const navigate = useNavigate();

  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  const submit = (e) => {
    e.preventDefault();
    const name = getCookie('username');
    axios
      .post('http://localhost:3000/api/feedback', {
        name: name,
        feedback: feedback
      })
      .then((response) => {
        console.log(response);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <div id="feedback">
      <div className="feedback-box">
        <h1 className="feedback-head">We'd Love to Hear Your Feedback!</h1>

        {!submitted ? (
          <form onSubmit={submit} className="feedback-form">
            <label className="feedback-label" htmlFor="feedback">
              Your Feedback:
            </label>
            <textarea
              onChange={(e) => {
                setFeedback(e.target.value);
              }}
              className="feedback-input"
              id="feedback"
              name="feedback"
              rows="5"
              placeholder="Enter your feedback here..."
              value={feedback}
              required
            ></textarea>
            <p className="feedback-text">
              Thank you for using Recipe Box. Your feedback helps us improve
              our platform.
            </p>
          <button className="submit-feedback" type="submit">Submit</button>
        
          </form>
        ) : (
          <>
          <p className="feedback-submitted">Thank you for your feedback! <br />Hope you had a  great expreience.</p>
          <div className="f_btns">
          <button className="submit-feedback">Back</button>
          <button className="submit-feedback">Log Out</button>
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Feedback;
