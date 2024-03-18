import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
