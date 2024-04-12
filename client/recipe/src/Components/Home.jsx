import React from 'react';
import './Home.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate, Link } from "react-router-dom";
import img1 from  "../assets/img/pexels-engin-akyurt-2994900.jpg";
import img2 from  "../assets/img/pexels-alex-bayev-12077980.jpg";
import img3 from  "../assets/img/pexels-engin-akyurt-3219483.jpg";
import img4 from  "../assets/img/pexels-jonathan-borba-3009323.jpg";
import img5 from  "../assets/img/pexels-karol-d-582486.jpg";
import img6 from  "../assets/img/pexels-lisa-fotios-918327.jpg";
import img7 from  "../assets/img/pexels-malidate-van-769289.jpg";
import img8 from  "../assets/img/pexels-marcelo-verfe-16743486.jpg";
import img9 from  "../assets/img/pexels-min-an-1482803.jpg";
import img10 from  "../assets/img/pexels-pascal-claivaz-410648.jpg";
import img11 from  "../assets/img/pexels-vanessa-loring-5965658.jpg";
import img12 from  "../assets/img/pexels-pixabay-416528.jpg";
import img13 from  "../assets/img/pexels-pixabay-262945.jpg";


function Home() {
  return (
    <>
        <Navbar></Navbar>

        <div id='cato'>
        <p className="menu-that-always">
            <span className="text-wrapper-2">Catogories</span>
            <span className="span"> that </span>
            <span className="text-wrapper-3">always</span>
            <span className="span"> make you fall in </span>
            <span className="text-wrapper-2">love</span>
        </p>
        <section id="meal-categories">
        <Link to={`/recipe/Chicken`} state={{'topic':'Chicken'}}>
            <div className='items'>
                <img className='meal-image' src={img1} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' >Chicken</h3>
            </div></Link>
            <Link to={`/recipe/Side `} state={{'topic':'Side'}}>
            <div className='items'>
                <img className='meal-image' src={img2} alt="${meal.strMeal}"/>
                <h3 className='meal-name name'   >Side Dish</h3>
            </div></Link>
            <Link to={`/recipe/breakfast `} state={{'topic':'breakfast'}}>
            <div className='items'>
                <img className='meal-image' src={img3} alt="${meal.strMeal}"/>
                <h3 className='meal-name name'>Break Fast</h3>
            </div></Link>
            <Link to={`/recipe/pasta `} state={{'topic':'pasta'}}>
            <div className='items'>
                <img className='meal-image' src={img4} alt="${meal.strMeal}"/>
                <h3 className='meal-name name'  >Pasta</h3>
            </div></Link>
            <Link to={`/recipe/vegan `} state={{'topic':'vegan'}}>
            <div className='items'>
                <img className='meal-image' src={img5} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' >Vegan</h3>
            </div></Link>
            <Link to={`/recipe/dessert `} state={{'topic':'dessert'}}>
            <div className='items'>
                <img className='meal-image' src={img6} alt="${meal.strMeal}"/>
                <h3 className='meal-name name'  >Dessert</h3>
            </div></Link>
            <Link to={`/recipe/goat `} state={{'topic':'goat'}}>
            <div className='items'>
                <img className='meal-image' src={img7} alt="${meal.strMeal}"/>
                <h3 className='meal-name name'  >Goat</h3>
            </div></Link>
            <Link to={`/recipe/seafood `} state={{'topic':'seafood'}}>
            <div className='items'>
                <img className='meal-image' src={img8} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' >Seafood</h3>
            </div></Link>
            <Link to={`/recipe/Lamb `} state={{'topic':'Lamb'}}>
            <div className='items'>
                <img className='meal-image' src={img9} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' >Lamb</h3>
            </div></Link>
            <Link to={`/recipe/beef `} state={{'topic':'beef'}}>
            <div className='items'>
                <img className='meal-image' src={img10} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' >Beef</h3>
            </div></Link>
            <Link to={`/recipe/egetarian `} state={{'topic':'egetarian'}}>
            <div className='items'>
                <img className='meal-image' src={img11} alt="${meal.strMeal}"/>
                <h3 className='meal-name name'  >Vegetarian</h3>
            </div></Link>
            <Link to={`/recipe/starter `} state={{'topic':'starter'}}>
            <div className='items'>
                <img className='meal-image' src={img12} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' >Starter</h3>
            </div></Link>
            <Link to={`/recipe/Pork `} state={{'topic':'Pork'}}>
            <div className='items'>
                <img className='meal-image' src={img13} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' >Pork</h3>
            </div></Link>

        </section>
    </div>
      {/* <Footer /> */}
    </>

  );
}

export default Home;

