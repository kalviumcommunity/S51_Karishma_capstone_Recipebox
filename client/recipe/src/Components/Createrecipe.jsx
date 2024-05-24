import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './Createrecipe.css'
import app from './Fire.config'
import { getStorage } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';



export default function Createrecipe() {
  const storage = getStorage(app);
  const [recipename,setName]=useState()
  const [youtube,setYoutube]=useState()
  const [Ingredient,setIngredient]=useState()
  const [progrss, setProgrss] = useState(0);
  const [isLoading, setIsLoading] = useState();
  const [file, setFile] = useState();
  const [url, setUrl] = useState();
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
}
const navigate = useNavigate()
  const onFileUpload = () => {
    if (!file) return;
    setIsLoading(true);
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed", (snapshot) => {
        var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgrss(progress);
    }, (err) => {
        console.log(err);
        setIsLoading(false);
    },
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then(url => {
                    setUrl(url);
                    setIsLoading(false);
                })
        }
    )
}

const onFileChange = e => {
    setFile(e.target.files[0]);
    e.preventDefault();
}
  const Submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/api/addrecipe",{
      username:getCookie('username'),
      strMeal:recipename,
      strMealThumb:url,
      youtubeLink:youtube,
      ingredient:Ingredient
    }).then((res)=>{
      console.log(res.data)
      navigate('/Recipes')
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
        </span><input type="text" onChange={(e)=>{setName(e.target.value)}} />
        </div>
        {/* <div className="i_recipe">
          <span>
          Recipe image:
        </span><input type="text"  onClick={(e)=>{setName(e.target.value)}}/>
        </div> */}
        <div className='y_recipe'>
          <span>
          Youtube Link:
        </span><input type="text"  onChange={(e)=>{setYoutube(e.target.value) }}/>
        </div>
        <div className='i_recipe' >
          <span>
          Ingredient:
        </span><input type="text"  onChange={(e)=>{setIngredient(e.target.value)}} />
        </div>
        <div>
        <input type="file" onChange={onFileChange} />
            <button type='button' onClick={onFileUpload}>
                Upload!
            </button>
            <div className="break"></div>
            {isLoading && <p>File upload <b>{progrss}%</b></p>}
            {/* {url && <p>Firebase storage URL: <img src={url} /></p>} */}
        </div>
        <div>
          <button type='submit'> Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}
