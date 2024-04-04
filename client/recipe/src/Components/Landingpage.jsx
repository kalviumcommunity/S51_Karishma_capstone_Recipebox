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
import facebook from '../assets/facebook.png';
import ig from '../assets/ig.png';
import { useNavigate, Link } from "react-router-dom";

// import aboutus from '../assets/aboutus.png';


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
                        <span className="btn_f">Home</span>
                        <Link style={{textDecoration:'none',color:'#000'}}to='/about'><span className="btn_f">About Us</span></Link>
                        <span className="btn_f">Recipe</span>
                    </div>
                    <div className="search_profile">
                        <img className="btn_f" src={search} alt="" />
                        <Link style={{textDecoration:'none',color:'#000'}}to='/login'><img className="btn_f" src={user} alt="" /></Link>
                    </div>
                </div>

                <div className="banner">

                    <div className="page_info">
                        <h1 className="intro">Cooking Made Fun <br></br>and Easy: Unleash <br></br>Your Inner Chef</h1>
                        <p className="tag_line">Discover more recipes in your hand with the best recipe.<br></br>
                            Help you to find the easiest way to cook.</p>
                        <button className="explore"><Link style={{textDecoration:'none',color:'#fff'}}to='/login'>Explore Recipe</Link></button>
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
                <Link style={{textDecoration:'none',color:'#000'}}to='/about'><div className="a_background">
                
                </div></Link>
                
                <footer>
                    <div className="f_info">
                        <div className="f_logo">
                            <img className="f_img"src={logo} alt="logo" />
                            <h1>Recipe Box</h1>
                        </div>
                        <p className="f_para">Recipe Box is a recipe website with a wide variety of <br />delicious recipes, 
                        easy-to-use search function. Join our<br /> community and let's cook together!</p>
                    </div>
                    <div className="f_nav">
                        <h1>Navigation</h1>
                        <ul>
                            <li>Home</li>
                            <li> <Link style={{textDecoration:'none',color:'#000'}} to='/about'>About Us</Link></li>
                            <li>Recipe</li>
                        </ul>
                    </div>
                    <div className="f_social">
                        <h1>Follow Us</h1>
                        <img className="f_icon" src={facebook} alt="facebook" />
                        <img className="f_icon" src={ig} alt="ig" />


                    </div>
                </footer>
            </div>
        </>
    )
}
export default Landingpage;