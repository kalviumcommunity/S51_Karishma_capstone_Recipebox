import React from "react";
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import user from '../assets/user.png';
import front_meal from '../assets/front_meal.png';
import creamy_salad from '../assets/creamy_salad.png';
import toffu from '../assets/toffu.png';
import potatoes from '../assets/potatoes.png';
import mushroom_soup from '../assets/mushroom_soup.png';
import pancake from '../assets/pancake.png';
import teriyaki from '../assets/teriyaki.png';


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
                <div className="recipe_side">
                    <div className="heading">
                        <h1 className="ways">Discover, Create, Share</h1>
                        
                        <button className="see_all">See All</button>
                    </div>
                    <div>
                    <p className="popular">Check our most popular recipes of this week</p>
                    </div>
                    <div className="ex_recipe">
                        
                            <div className="r_box">
                            <img src={creamy_salad} className="r_img" alt="" />
                            <div className="r_head">
                                <p className="r_name">Creamy Salad</p>
                                </div>
                            </div>
                            <div className="r_box">
                                <img src={toffu} className="r_img" alt="" />
                                <div className="r_head">
                                    <p className="r_name">Tofu Tomatoes Soup </p>
                                </div>
                            </div>
                            <div className="r_box">
                                <img src={potatoes}  className="r_img" alt="" />
                                <div className="r_head">
                                    <p className="r_name">Crunchy Potatoes</p>
                                </div>
                            </div>
                            <div className="r_box">
                                <img src={mushroom_soup} className="r_img" alt="" />
                                <div className="r_head">
                                    <p className="r_name">Mushroom Soup</p>
                                </div>
                            </div>
                            <div className="r_box"> 
                                <img src={pancake} className="r_img" alt="" />
                                <div className="r_head">
                                    <p className="r_name">Raspberry Pancake</p>
                                </div>
                            </div>
                            <div className="r_box">
                                <img src={teriyaki} className="r_img" alt="" />
                                <div className="r_head">
                                    <p className="r_name">Beef Teriyaki</p>
                                </div>
                            </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}
export default Landingpage;