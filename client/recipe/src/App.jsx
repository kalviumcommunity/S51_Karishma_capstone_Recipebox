import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import LoginPopup from './Components/LoginPopup';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPopup />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
