import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('https://s51-karishma-capstone-recipebox.onrender.com/api/favorites', {
        
        headers: {
          'Authorization': `Bearer ${document.cookie.split('=')[1]}`
        }
    });
    console.log(response)
      setFavorites(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div id="Favorites">
        {favorites.length > 0 ? favorites.map((fav, index) => (
          <div key={index}>
            <img src={fav.strMealThumb} alt={fav.strMeal} />
            <h3>{fav.strMeal}</h3>
          </div>
        )) : <div>No favorites yet.</div>}
      </div>
    </>
  );
};

export default Favorite;
