import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './SignUp.css'; 
import axios from "axios"

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [close,setclose]=useState(false)
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
const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
 
    if (!username.includes('@') ) {
      setUsernameError('Username must contain @ and end with .com');
      return;
    }

    if (password.length < 10) {
      setPasswordError('Password must be at least 10 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }
            axios.post('https://s51-karishma-capstone-recipebox.onrender.com/signup',{
                name:username,
                password:password
            }).then((response)=>{
            setCookie('token', response.data.accessToken,365);
            setCookie('username', username,365);
        navigate('/Home')}).catch((error)=>{console.error(error)});
    console.log('Signing up with:', username, password);

  };

  const handleInputChange = (e, setInput, setError) => {
    setInput(e.target.value);
    setError(''); 
  };

  return (
    <div id="SignUp" className="signup">
      <div className="details">
        <span className="close" id='Close_button' >&times;</span>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => handleInputChange(e, setUsername, setUsernameError)} />
          {usernameError && <p className="error">{usernameError}</p>}
          <input type="password" placeholder="Password" value={password} onChange={(e) => handleInputChange(e, setPassword, setPasswordError)} />
          {passwordError && <p className="error">{passwordError}</p>}
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => handleInputChange(e, setConfirmPassword, setConfirmPasswordError)} />
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/">Log in here.</Link></p>
      </div>
    </div>
  );
}

export default SignUp;
