import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './Createrecipe.css'
import app from './Fire.config'
import { getStorage } from "firebase/storage";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";



export default function Createrecipe() {
  const storage = getStorage(app);
  const [name,setName]=useState()
  const [youtube,setYoutube]=useState()
  const [Ingredient,setIngredient]=useState()
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
const handleSubmit = (e) => {
  e.preventDefault()
  const file = e.target[0]?.files[0]

  if (!file) return;

  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on("state_changed",
    (snapshot) => {
      const progress =
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgresspercent(progress);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImgUrl(downloadURL)
      });
    }
  );
}
  const Submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/api/addrecipe",{
      username:getCookie('username'),
      strMeal:name,
      strMealThumb:imgUrl,
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
        <div>
          <span>
          <form onSubmit={handleSubmit} className='form'>
        <input type='file' />
        <button type='submit'>Upload</button>
      </form>
          <label>Select image:</label>
          {
        !imgUrl &&
        <div className='outerbar'>
          <div className='innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
        imgUrl &&
        <img src={imgUrl} alt='uploaded file' height={200} />
      }
          </span>
        </div>
        <div>
          <button type='submit'> Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}
