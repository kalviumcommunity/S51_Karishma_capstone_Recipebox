import React from 'react'
import Navbar from './Navbar'
import './Favorites.css'
import Favorite from './Favorite'
function Recipes() {
  return (
  <>
  <div className='recipe'>
    <Navbar />
    <div className='comp_recipe'>
      <Favorite/>
    </div>
    </div>
  </>
    
    )
}
export default Recipes
