import React, { useState, useEffect } from 'react';
import './Home.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import img1 from '../assets/img/pexels-engin-akyurt-2994900.jpg';
import img2 from '../assets/img/pexels-alex-bayev-12077980.jpg';
import img3 from '../assets/img/pexels-engin-akyurt-3219483.jpg';
import img4 from '../assets/img/pexels-jonathan-borba-3009323.jpg';
import img5 from '../assets/img/pexels-karol-d-582486.jpg';
import img6 from '../assets/img/pexels-lisa-fotios-918327.jpg';
import img7 from '../assets/img/pexels-malidate-van-769289.jpg';
import img8 from '../assets/img/pexels-marcelo-verfe-16743486.jpg';
import img9 from '../assets/img/pexels-min-an-1482803.jpg';
import img10 from '../assets/img/pexels-pascal-claivaz-410648.jpg';
import img11 from '../assets/img/pexels-vanessa-loring-5965658.jpg';
import img12 from '../assets/img/pexels-pixabay-416528.jpg';
import img13 from '../assets/img/pexels-pixabay-262945.jpg';
import Ellipse from '../assets/Ellipse 57.svg';
import reviewimg1 from '../assets/unsplash_EPi3TRQc5Z0 copy.svg';
import reviewimg2 from '../assets/unsplash_m663zRzRe40 copy.svg';
import reviewimg3 from '../assets/unsplash_7Sz71zuuW4k.svg';
import star from '../assets/Star 7.svg';

function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState({ meals: [] });
  const [state, setState] = useState({ loading: true, error: null });

  const searchParameter = (newState) => {
    setSearchValue(newState);
    setState({ loading: false, error: null });
  };

  useEffect(() => {
    fetchNewsData();
  }, [searchValue]);

  const fetchNewsData = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue || 'a'}`);
      setData(response.data);
      setState({ loading: false, error: null });
    } catch (err) {
      console.error(err);
      setData({ meals: [] });  // Ensure data.meals is set to an empty array on error
      setState({ loading: false, error: err });
    }
  };

  if (state.error) {
    return <div style={{ color: 'red' }}>Error: {state.error.message}</div>;
  }

  if (state.loading) {
    return <div>Loading...</div>;
  }

  function random_wholenum() {
    return Math.floor(Math.random() * 5) + 1;
  }

  function random_decimalnum() {
    return Math.floor(Math.random() * 10);
  }

  return (
    <>
      <Navbar onChange={searchParameter} />
      {searchValue === '' ? (
        <div id='cato'>
          <p className="menu-that-always">
            <span className="text-wrapper-2">Categories</span>
            <span className="span"> that </span>
            <span className="text-wrapper-3">always</span>
            <span className="span"> make you fall in </span>
            <span className="text-wrapper-2">love</span>
          </p>
          <section id="meal-categories">
            <Link to={`/recipe/Chicken`} state={{ topic: 'Chicken' }}>
              <div className='items'>
                <img className='meal-image' src={img1} alt="Chicken" />
                <h3 className='meal-name name'>Chicken</h3>
              </div>
            </Link>
            <Link to={`/recipe/Side`} state={{ topic: 'Side' }}>
              <div className='items'>
                <img className='meal-image' src={img2} alt="Side Dish" />
                <h3 className='meal-name name'>Side Dish</h3>
              </div>
            </Link>
            <Link to={`/recipe/breakfast`} state={{ topic: 'breakfast' }}>
              <div className='items'>
                <img className='meal-image' src={img3} alt="Break Fast" />
                <h3 className='meal-name name'>Break Fast</h3>
              </div>
            </Link>
            <Link to={`/recipe/pasta`} state={{ topic: 'pasta' }}>
              <div className='items'>
                <img className='meal-image' src={img4} alt="Pasta" />
                <h3 className='meal-name name'>Pasta</h3>
              </div>
            </Link>
            <Link to={`/recipe/vegan`} state={{ topic: 'vegan' }}>
              <div className='items'>
                <img className='meal-image' src={img5} alt="Vegan" />
                <h3 className='meal-name name'>Vegan</h3>
              </div>
            </Link>
            <Link to={`/recipe/dessert`} state={{ topic: 'dessert' }}>
              <div className='items'>
                <img className='meal-image' src={img6} alt="Dessert" />
                <h3 className='meal-name name'>Dessert</h3>
              </div>
            </Link>
            <Link to={`/recipe/goat`} state={{ topic: 'goat' }}>
              <div className='items'>
                <img className='meal-image' src={img7} alt="Goat" />
                <h3 className='meal-name name'>Goat</h3>
              </div>
            </Link>
            <Link to={`/recipe/seafood`} state={{ topic: 'seafood' }}>
              <div className='items'>
                <img className='meal-image' src={img8} alt="Seafood" />
                <h3 className='meal-name name'>Seafood</h3>
              </div>
            </Link>
            <Link to={`/recipe/Lamb`} state={{ topic: 'Lamb' }}>
              <div className='items'>
                <img className='meal-image' src={img9} alt="Lamb" />
                <h3 className='meal-name name'>Lamb</h3>
              </div>
            </Link>
            <Link to={`/recipe/beef`} state={{ topic: 'beef' }}>
              <div className='items'>
                <img className='meal-image' src={img10} alt="Beef" />
                <h3 className='meal-name name'>Beef</h3>
              </div>
            </Link>
            <Link to={`/recipe/vegetarian`} state={{ topic: 'vegetarian' }}>
              <div className='items'>
                <img className='meal-image' src={img11} alt="Vegetarian" />
                <h3 className='meal-name name'>Vegetarian</h3>
              </div>
            </Link>
            <Link to={`/recipe/starter`} state={{ topic: 'starter' }}>
              <div className='items'>
                <img className='meal-image' src={img12} alt="Starter" />
                <h3 className='meal-name name'>Starter</h3>
              </div>
            </Link>
            <Link to={`/recipe/Pork`} state={{ topic: 'Pork' }}>
              <div className='items'>
                <img className='meal-image' src={img13} alt="Pork" />
                <h3 className='meal-name name'>Pork</h3>
              </div>
            </Link>
          </section>
        </div>
      ) : (
        <div id='Recipe'>
          {Array.isArray(data.meals) && data.meals.length > 0 ? (
            data.meals.map((meal, index) => (
              <div className="cato-div-meal" key={index}>
                <div className="rectangle"></div>
                <div className="group-2">
                  <div className="div-cato-meal">
                    <div className="image-review">
                      <img className="review-img-1" src={reviewimg1} alt="Review 1" />
                      <img className="review-img-2" src={reviewimg2} alt="Review 2" />
                      <img className="review-img-3" src={reviewimg3} alt="Review 3" />
                    </div>
                  </div>
                  <div className="group-3">
                    <img className="star" src={star} alt="Star" />
                    <div className="review-text">({random_wholenum()}.{random_decimalnum()})</div>
                  </div>
                </div>
                <div className="text-meal-name">{meal.strMeal}</div>
                <div className="div-recipe">
                  <div
                    onClick={() => searchYouTubeVideos(meal.strMeal)}
                    className="youtube-div"
                  >
                    <img className="star youtube" src="./assets/Group 5.png" alt="YouTube" />
                    <div className="text-recipe">Recipe</div>
                  </div>
                </div>
                <div className="group-4">
                  <div className="overlap-7">
                    <div className="group-5">
                      <div className="overlap-8">
                        <img className="meal-thumb-img" src={meal.strMealThumb} alt={meal.strMeal} />
                      </div>
                    </div>
                    <img className="ellipse-2" src={Ellipse} alt="Ellipse" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='no-recipe'>
              <h1>No recipe found.</h1>
            </div>
          )}
        </div>
      )}
      <Footer />
    </>
  );
}

const searchYouTubeVideos = (mealName) => {
  // Define your YouTube search function here
  console.log(`Searching for ${mealName} on YouTube`);
};

export default Home;
