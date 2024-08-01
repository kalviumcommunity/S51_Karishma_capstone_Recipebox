import React from 'react';
import './Feedback.css';
import {  Link , useNavigate } from 'react-router-dom';
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
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}
  const signOut=()=>{
    // console.log("Test",getCookie('username'))
      // setCookie('username', "", 0)
      setCookie('token', "", 0)
      setCookie("logedin","",0)
      console.log("Test",getCookie('username'))
      navigate('/')
  }

  const submit = (e) => {
    e.preventDefault();
    const name = getCookie('username');
    axios
      .post('https://s51-karishma-capstone-recipebox.onrender.com/api/feedback', {
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
          <button className="submit-feedback"><Link to="/Home">Back</Link></button>
          
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Feedback;
