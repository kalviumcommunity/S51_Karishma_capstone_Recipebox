import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [close,setclose]=useState(false)

  const onClose =()=>{
    setclose(!close);
    if (close === true){
      document.getElementById("SignUp").style.display="none"
    }else{
      document.getElementById("SignUp").style.display="block"
    }
  }
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!username.includes('@') || !username.endsWith('.com')) {
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

    console.log('Signing up with:', username, password);
    onClose(); 
  };

  const handleInputChange = (e, setInput, setError) => {
    setInput(e.target.value);
    setError(''); // Clear any previous error
  };

  return (
    <div id="SignUp" className="signup">
      <div className="content">
        <span className="close" id='Close_button' onClick={onClose}>&times;</span>
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
