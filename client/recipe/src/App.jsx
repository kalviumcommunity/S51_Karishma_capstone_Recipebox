import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Favorites from './Components/Favourites';
import About from './Components/About';
import LoginPopup from './Components/LoginPopup';
import SignUp from './Components/SignUp';
import Landingpage from './Components/Landingpage';
import Foodcontainer from './Components/Foodcontainer';
import Feedback from './Components/Feedback'; 
import Recipes from './Components/Favourites';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Favorites" element={<Favorites/>}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPopup />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recipe/:topic" element={<Foodcontainer />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/Recipe" element={< Recipes/>} />


        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
