import React from 'react';
import './About.css'; // Make sure the path is correct

function About() {
  return (
    <div id='about'>
    <div className="a_container">
      <h1 className='a_head'>Welcome to Recipe Box.</h1>
      <p className='a_para'>We are excited to be your cooking partners on your cooking journey. Cooking is more about an expression of self through food.</p>
      <p className='a_para'>Here you can explore, share and enjoy flavorful meals which that serves as a flexible platform for both experienced cooks and <br />people who are starting their cooking journey.</p>
      <h1 className='a_head'>What makes us different ?</h1>
      <p className='a_para'>You can easily manage your recipes using our user-friendly platform. You will have the ability to add or remove <br />any recipe to your liked list, just by clicking a couple of buttons. <br />you can also view the cooking instruction video with the given youtube link</p>
      <h1 className='a_head'>Therefore, let’s cook and create together!</h1>
      
    </div>
    </div>
  );
}

export default About;
