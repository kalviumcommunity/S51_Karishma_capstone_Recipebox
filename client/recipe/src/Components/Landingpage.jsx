import React from "react";
import logo from  '../assets/logo.png';
import search from  '../assets/search.png';
import user from  '../assets/user.png';

function Landingpage() {
    return (
        <>
          <div className="lp_nav_main">
            <div className="logo_web">
                <img  src={logo} alt="" />
                <span>Recipe Box</span>
            </div>
            <div className="features">
                <span>Home</span>
                <span>About Us</span>
                <span>Recipe</span>
            </div>
            <div className="search_profile">
                <img src={search} alt="" />
                <img src={user} alt="" />
            </div>
          </div>
        </>
    )
}
export default Landingpage;