import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import './Foodcontainer.css';
import Ellipse from '../assets/Ellipse 57.svg';
import reviewimg1 from '../assets/unsplash_EPi3TRQc5Z0 copy.svg';
import reviewimg2 from '../assets/unsplash_m663zRzRe40 copy.svg';
import reviewimg3 from '../assets/unsplash_7Sz71zuuW4k.svg';
import star from '../assets/Star 7.svg';
import youtube from '../assets/Group 5.png';
import heart from '../assets/heart.png';

function Foodcontainer() {
  const location = useLocation();
  const { topic } = useParams();
  const [searchValue, setSearchValue] = useState(null);
  const [data, setData] = useState({ meals: [] });
  const [state, setState] = useState({ loading: true, error: null });
  const [popup, setPopup] = useState({ show: false, message: '' });

  function getCookie(name) {
    const cookieArray = document.cookie.split('; ');
    const cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  useEffect(() => {
    if (searchValue !== null) {
      fetchRecipeData();
    }
  }, [searchValue]);

  useEffect(() => {
    fetchNewsData();
  }, [topic]);

  const postFavorite = (meal) => {
    axios.post('https://s51-karishma-capstone-recipebox.onrender.com/api/addfavorite', {
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      // username: getCookie('username')
    })
    .then((response) => {
      console.log(response.data, "data");
      setPopup({ show: true, message: 'Favorite added successfully!' });
      setTimeout(() => setPopup({ show: false, message: '' }), 3000);
    })
    .catch((error) => {
      console.error(error);
      setPopup({ show: true, message: 'Error adding favorite!' });
      setTimeout(() => setPopup({ show: false, message: '' }), 3000);
    });
  };

  const fetchRecipeData = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue || 'a'}`);
      setData(response.data);
      setState({ loading: false, error: null });
    } catch (err) {
      console.error(err);
      setState({ loading: false, error: err });
    }
  };

  const fetchNewsData = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${topic}`);
      setData(response.data);
      setState({ loading: false, error: null });
    } catch (err) {
      console.error(err);
      setState({ loading: false, error: err });
    }
  };

  const searchYouTubeVideos = (dishName) => {
    const apiKey = 'AIzaSyCUJV6Nbsb2FkwBHxS46BCVa-ibM_RS7Z0';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(dishName + ' recipe')}&type=video&key=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        const videoId = response.data.items[0].id.videoId;
        const youtubeLink = `https://www.youtube.com/watch?v=${videoId}`;
        window.open(youtubeLink, '_blank');
      });
  };

  const renderMeal = (meal, index) => (
    <div className="cato-div-meal" key={index}>
      <div className="rectangle"></div>
      <div className="group-2">
        <div className="div-cato-meal">
          <div className="image-review">
            <img className="review-img-1" src={reviewimg1} alt="review" />
            <img className="review-img-2" src={reviewimg2} alt="review" />
            <img className="review-img-3" src={reviewimg3} alt="review" />
          </div>
        </div>
        <div className="group-3">
          <img className="star" src={star} alt="star" />
          <div className="review-text">({Math.floor(Math.random() * 5) + 1}.{Math.floor(Math.random() * 10)})</div>
        </div>
      </div>
      <div className="text-meal-name">{meal.strMeal}</div>
      <div className="div-recipe">
        <div onClick={() => searchYouTubeVideos(meal.strMeal)} className="youtube-div">
          <img className="star youtube" src={youtube} alt="youtube" />
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
          <img className="ellipse-2" src={Ellipse} alt="ellipse" />
        </div>
      </div>
    </div>
  );

  if (state.error) {
    return <div style={{ color: 'red' }}>Error: {state.error.message}</div>;
  }

  if (state.loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar onChange={setSearchValue} />
      <div id="Recipe">
        {popup.show && <div className="popup">{popup.message}</div>}
        {data.meals && data.meals.length > 0 ? data.meals.map(renderMeal) : <div className='nor'>No recipe found.</div>}
      </div>
    </>
  );
}

export default Foodcontainer;
