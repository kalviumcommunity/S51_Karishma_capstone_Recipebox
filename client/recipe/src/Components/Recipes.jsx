import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import './Recipes.css'
import {Link} from 'react-router-dom'
function Recipes() {
  const [data,setData]=useState([])
  const [state, setState] = useState({
    loading: true,
    error: null,
  });
  useEffect(()=>{
    const recipedata = async()=>{
      try{
          const response = await axios.post('http://localhost:3000/api/getrecipe',{
                  username:"KARISHU SS" 
          })
          setData(response.data); 
        console.log(data)
        setState({ loading: false, error: null });
        console.log(response.data);
      }catch(err){
          console.error(err)
      }
  }
  recipedata()
  },[])
  if (state.error) {
    return <div style={{ color: 'red' }}>Error: {state.error.response.data.errors
    }</div>;
  }
  if (state.loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <Navbar/>
    <div>
      {
        (data.length>1)?
        <>
          <h1>Recipes</h1>
        </>:
        <div className='cont_recipe'>
          <h1 className='h_recipe'>Welcome to Recipe Box</h1>
          <h2 className='info_recipe'>Click on the button below to add your first recipe</h2>
          <Link to='/Createrecipe'><button className='btn_recipe'>Add + </button></Link>
        </div>
      }
    </div>
    </>
  )
}

export default Recipes