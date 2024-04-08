import React from 'react';
import './Home.css';
import Footer from './Footer';
import Navbar from './Navbar';
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
            <div className='items'>
                <img className='meal-image' src={img1} alt="${meal.strMeal}"/>
                <h3 onclick="fetchMealsByCategory('Chicken')" className='meal-name name' >Chicken</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img2} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('side')"  >Side Dish</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img3} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('breakfast')" >Break Fast</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img4} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('pasta')" >Pasta</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img5} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('vegan')" >Vegan</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img6} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('dessert')" >Dessert</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img7} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('goat')" >Goat</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img8} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('seafood')" >Seafood</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img9} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('lamb')" >Lamb</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img10} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('beef')" >Beef</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img11} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('egetarian')" >Vegetarian</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img12} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('starter')" >Starter</h3>
            </div>
            <div className='items'>
                <img className='meal-image' src={img13} alt="${meal.strMeal}"/>
                <h3 className='meal-name name' onclick="fetchMealsByCategory('Pork')" >Pork</h3>
            </div>

        </section>
    </div>
      {/* <Footer /> */}
    </>

  );
}

export default Home;

