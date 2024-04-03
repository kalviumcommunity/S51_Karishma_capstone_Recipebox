import React from "react";
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import user from '../assets/user.png';
import front_meal from '../assets/front_meal.png';

function Landingpage() {
    return (
        <>
            <div className="landing_container">
                <div className="lp_nav_main">
                    <div className="logo_web">
                        <img src={logo} alt="" />
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

                <div className="banner">

                    <div className="page_info">
                        <h1 className="intro">Cooking Made Fun <br></br>and Easy: Unleash <br></br>Your Inner Chef</h1>
                        <p className="tag_line">Discover more recipes in your hand with the best recipe.<br></br>
                            Help you to find the easiest way to cook.</p>
                        <button className="explore">Explore Recipe</button>
                    </div>
                    <div className="front_meal">
                        <img src={front_meal} alt="" />
                    </div>
                </div>
                {/* <div className="recipe_side">
                    <div className="heading">
                        <h1 className="ways">Discover, Create, Share</h1>
                        <p className="popular">Check our most popular recipes of this week</p>
                        <button className="see_all">See All</button>
                    </div>
                </div> */}
            </div>
        </>
    )
}
export default Landingpage;