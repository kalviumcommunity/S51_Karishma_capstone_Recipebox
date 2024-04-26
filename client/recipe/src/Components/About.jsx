import React from 'react';
import './About.css'; 
import { Link } from 'react-router-dom';

function About() {
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
}
  return (
    <div id='about'>
    <div className="a_container">
      <h1 className='a_head'>Welcome to Recipe Box.</h1>
      <p className='a_para'>We are excited to be your cooking partners on your cooking journey. Cooking is more about an expression of self through food.</p>
      <p className='a_para'>Here you can explore, share and enjoy flavorful meals which that serves as a flexible platform for both experienced cooks and <br />people who are starting their cooking journey.</p>
      <h1 className='a_head'>What makes us different ?</h1>
      <p className='a_para'>You can easily manage your recipes using our user-friendly platform. You will have the ability to add or remove <br />any recipe to your liked list, just by clicking a couple of buttons. <br />you can also view the cooking instruction video with the given youtube link</p>
      <h1 className='a_head'>Therefore, let’s cook and create together!</h1>
      {getCookie("logedin")?
      <Link to="/feedback">
      <button className="feedback-button">Leave Feedback</button>
    </Link>:
    <Link to="/login">
    <button className="feedback-button">Leave Feedback</button>
  </Link>}
      
      
    </div>
    </div>
  );
}

export default About;
