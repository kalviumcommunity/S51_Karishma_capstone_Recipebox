import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Recipes from './Components/Recipes';
import About from './Components/About';
import LoginPopup from './Components/LoginPopup';
import SignUp from './Components/SignUp';
import Landingpage from './Components/Landingpage';
import Foodcontainer from './Components/Foodcontainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Recipes" element={<Recipes/>}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPopup />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recipe/:topic" element={<Foodcontainer />} />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
