import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './Createrecipe.css'



export default function Createrecipe() {
  const [name,setName]=useState()
  const [image,setImage]=useState()
  const [youtube,setYoutube]=useState()
  const [Ingredient,setIngredient]=useState()
  const Submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/api/addrecipe",{
      username:getCookie('username'),
      strMeal:name,
      strMealThumb:image,
      youtubeLink:youtube,
      ingredient:Ingredient
    }).then((res)=>{
      console.log(res.data)
      useNavigate("/Recipes")
    })
  
  }
  return (
    <div className='f_recipe'>
        <Navbar/>
    

    <div className='fd_recipe'>
      <h1 className='hf_recipe'>ADD YOUR RECIPE</h1>
      <form className=" fill_f" onSubmit={Submit}>
        <div className='n_recipe'>
          <span>
          Recipe Name:
        </span><input type="text" onClick={(e)=>{setName(e.target.value)}} />
        </div>
        {/* <div className="i_recipe">
          <span>
          Recipe image:
        </span><input type="text"  onClick={(e)=>{setName(e.target.value)}}/>
        </div> */}
        <div className='y_recipe'>
          <span>
          Youtube Link:
        </span><input type="text"  onClick={(e)=>{setYoutube(e.target.value)}}/>
        </div>
        <div className='i_recipe' >
          <span>
          Ingredient:
        </span><input type="text"  onClick={(e)=>{setIngredient(e.target.value)}} />
        </div>
      </form>
    </div>
    </div>
  )
}
