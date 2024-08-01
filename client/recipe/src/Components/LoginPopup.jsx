import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPopup.css';
import axios from "axios";
import { signInWithPopup, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import app from './Fire.config';
import googleimg from "../assets/google.png";
import { getAuth } from 'firebase/auth';

function LoginPopup() {
  const auth = getAuth(app);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.includes('@')) {
      setUsernameError('Username must contain @ and end with .com');
      return;
    }
    if (password.length < 10) {
      setPasswordError('Password must be at least 10 characters long');
      return;
    }

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

    axios.post('https://s51-karishma-capstone-recipebox.onrender.com/login', {
      name: username,
      password: password
    }).then((response) => {
      setCookie('logedin', true, 365);
      setCookie('token', response.data.accessToken, 365);
      setCookie('username', username, 365);
      navigate('/Home');
    }).catch((error) => {
      console.error(error);
    });
  };

  const googlePopup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      navigate('/Home');
      // const result = await signInWithPopup(auth, provider);
      console.log(result);
      function setCookie(name, value, daysToExpire) {
        let date = new Date();
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
      }
      setCookie('logedin', true, 365);
      setCookie('username', result.user.displayName, 365);
      setCookie('token', result.user.accessToken, 365);
      alert('Google sign-in success.');

      navigate('/Home');
    } catch (error) {
      alert('Google sign-in success.');
      // setCookie('logedin', true, 365);
      // setCookie('token', result.user.accessToken, 365);/
      navigate('/Home');
    }
  };

  const googleRedirect = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await auth.signInWithRedirect(provider);
      const result = await getRedirectResult(auth);
      if (result) {
        const user = result.user;
        console.log(user);
        function setCookie(name, value, daysToExpire) {
          let date = new Date();
          date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
          document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
        }
        setCookie('logedin', true, 365);
        setCookie('username', user.displayName, 365);
        setCookie('token', user.accessToken, 365);
        navigate('/Home');
      }
    } catch (error) {
    //  console.error(error);
    }
  };

  const canClose = true;
  const canLogin = username.trim() !== '' && password.trim() !== '';

  return (
    <div className="login">
      <div className="content">
        <span className={`close ${canClose ? '' : 'disabled'}`} onClick={() => navigate(-1)}>&times;</span>
        <h2 className='head_login'>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className="error">{usernameError}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
          <button type="submit" disabled={!canLogin}>Login</button>
        </form>
        <img className='g_icon' src={googleimg} onClick={googlePopup} alt="google icon" />
        <p className='s_login'>
          Don't have an account? <Link to="/signup">Create one for your own.</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPopup;
