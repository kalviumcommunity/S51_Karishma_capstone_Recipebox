import React from 'react'
import Navbar from './Navbar'
import './Recipes.css'
import Favorite from './Favorite'
import Createrecipe from './Createrecipe'
function Recipes() {
  return (
  <>
  <div className='recipe'>
    <Navbar />
    <div className='comp_recipe'>
      <Favorite/>
      <Createrecipe/>
    </div>
    </div>
  </>
    
    )
}
export default Recipes
