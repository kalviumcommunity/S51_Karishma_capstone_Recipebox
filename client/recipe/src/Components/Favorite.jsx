import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Favorite.css'
import Ellipse from "../assets/Ellipse 57.svg";
import reviewimg1 from "../assets/unsplash_EPi3TRQc5Z0 copy.svg";
import reviewimg2 from "../assets/unsplash_m663zRzRe40 copy.svg";
import reviewimg3 from "../assets/unsplash_7Sz71zuuW4k.svg";
import star from "../assets/Star 7.svg"
import youtube from "../assets/Group 5.png"
import heart from  "../assets/heart.png"
function Favorite() {
    const [searchValue,setSearchValue]= useState(null)
    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
      }
      
    
      console.log(getCookie('logedin'))
       
      const [data, setData] = useState({ meals:[{strmeal:"No Recipe Found"}] }); 
      const [state, setState] = useState({
        loading: true,
        error: null,
      });
      useEffect(() => {
        favoritedata();
      }, []);
      const postFavorite=(meal)=>{
        
        axios.delete(`https://s51-karishma-capstone-recipebox.onrender.com/api/deletefavorite/${meal._id}`)
     .then((response) =>{ console.log(response.data);
      window.location.reload()
    })
    .catch((error) => console.error(error))
      }

      const favoritedata = async()=>{
        try{
            const response = await axios.post('https://s51-karishma-capstone-recipebox.onrender.com/api/getfavorite',{
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
    
      const searchYouTubeVideos=(dishName) =>{
        const apiKey = 'AIzaSyCUJV6Nbsb2FkwBHxS46BCVa-ibM_RS7Z0';
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(dishName + "recipe")}&type=video&key=${apiKey}`;
        console.log('API Request URL:', apiUrl);
    
        axios.get(apiUrl)
            .then(response => response.data)
            .then(data => {
                const videoId = data.items[0].id.videoId;
                const youtubeLink = `https://www.youtube.com/watch?v=${videoId}`;
                window.open(youtubeLink,'_blank')
            })
    }
      if (state.error) {
        return <div style={{ color: 'red' }}>Error: {state.error.response.data.errors
        }</div>;
      }
      if (state.loading) {
        return <div>Loading...</div>;
      }
      function random_wholenum(){
        return Math.floor(Math.random() * 5)+1;
    }
    function random_decimalnum(){
        return Math.floor(Math.random() * 10);
    }


    console.log(data)
    const searchParameter =(newState)=>{
        setSearchValue(newState);
        setState({ loading: false, error: "err" });
    }

    

    if(searchValue == null){
      return (
        <>
          <Navbar onChange={searchParameter}></Navbar>
          <div id='Recipe'>
            {data.length > 0 ? ( 
              data.map((meal,index)=>{
                return (                <div className="cato-div-meal"  key={index}>
                <div className="rectangle"></div>
                <div className="group-2">
                    <div className="div-cato-meal">
                        <div className="image-review ">
                            <img className="review-img-1" src={reviewimg1}/>
                            <img className="review-img-2" src={reviewimg2}/>
                            <img className="review-img-3" src={reviewimg3}/>
                        </div>
                    </div>
                    <div className="group-3">
                        <img className="star" src={star} />
                        <div className="review-text">({random_wholenum()}.{random_decimalnum()})</div>
                    </div>
                </div>
                <div className="text-meal-name">{meal.strMeal}</div>
                <div className="div-recipe">
                    <div onClick={()=>searchYouTubeVideos(meal.strMeal)} className="youtube-div" > <img className="star youtube" src={youtube} /><div className="text-recipe">Recipe</div></div>
                </div>
                <div className='adding'>
              <button className='adding_f' onClick={()=>{postFavorite(meal)}}><img className='heart' src={heart} alt="" />Remove from Favorites</button>

            </div>
                <div className="group-4">
                    <div className="overlap-7">
                        <div className="group-5">
                            <div className="overlap-8">
                                <img className="meal-thumb-img" src={meal.strMealThumb} />
                            </div>
                        </div>
                        <img className="ellipse-2" src={Ellipse} />
                    </div>
                </div>
            </div>)
              })) : (
              <div>No recipe found.</div> 
            )}
          </div>
        </>
      )
}
else{
   

  // if (state.error) {
  //   return <div style={{ color: 'red' }}>Error: {state.error.response.data.errors
  //   }</div>;
  // }
  if (state.loading) {
    return <div>Loading...</div>;
  }
  function random_wholenum(){
    return Math.floor(Math.random() * 5)+1;
}
function random_decimalnum(){
    return Math.floor(Math.random() * 10);
}
return(
    <>
    <Navbar onChange={searchParameter}></Navbar>
    <div id='Recipe'>
    {data.length > 0 ? ( 
          data.map((meal,index)=>{
            return (                <div className="cato-div-meal"  key={index}>
            <div className="rectangle"></div>
            <div className="group-2">
                <div className="div-cato-meal">
                    <div className="image-review ">
                        <img className="review-img-1" src={reviewimg1}/>
                        <img className="review-img-2" src={reviewimg2}/>
                        <img className="review-img-3" src={reviewimg3}/>
                    </div>
                </div>
                <div className="group-3">
                    <img className="star" src={star} />
                    <div className="review-text">({random_wholenum()}.{random_decimalnum()})</div>
                </div>
            </div>
            <div className="text-meal-name">{meal.strMeal}</div>
            <div className="div-recipe">
                <div onClick={()=>searchYouTubeVideos(meal.strMeal)}  className="youtube-div" > <img className="star youtube" src="./assets/Group 5.png" /><div className="text-recipe">Recipe</div></div>
            </div>
            <div className='adding'>
          
              <button className='adding_f'><img className='heart' src={heart} alt="" />Add to Favorites</button>
            </div>
            <div className="group-4">
                <div className="overlap-7">
                    <div className="group-5">
                        <div className="overlap-8">
                            <img className="meal-thumb-img" src={meal.strMealThumb} />
                        </div>
                    </div>
                    <img className="ellipse-2" src={Ellipse} />
                </div>
            </div>
        </div>)
          })) : (
          <div>No recipe found.</div> 
        )}
      </div>
    </>
)
}
}

export default Favorite