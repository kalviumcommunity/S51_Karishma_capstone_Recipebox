import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
function Recipes() {
  const [data,setData]=useState()
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
  return (
    <>
    <Navbar/>
    <div>

    </div>
    </>
  )
}

export default Recipes