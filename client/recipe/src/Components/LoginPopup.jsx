import React, { useState } from 'react';
import './LoginPopup.css';

function LoginPopup({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!username.includes('@') || !username.endsWith('.com')) {
      setUsernameError('Username must contain @ and end with .com');
      return;
    }
    if (password.length < 10) {
      setPasswordError('Password must be at least 10 characters long');
      return;
    }

    console.log('Logging in with:', username, password);
    onClose();
  };

  const canClose = username.trim() !== '' && password.trim() !== '';

  return (
    <div className="login">
      <div className="content">
        {!canClose && <p className="message">Please fill out the form before closing.</p>}
        <span className={`close ${canClose ? '' : 'disabled'}`} onClick={canClose ? onClose : undefined}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          {usernameError && <p className="error">{usernameError}</p>}
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <p className="error">{passwordError}</p>}
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Create one for your own.</a></p>
      </div>
    </div>
  );
}

export default LoginPopup;
