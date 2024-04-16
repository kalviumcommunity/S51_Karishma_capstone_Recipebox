import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Foodcontainer.css'
import Ellipse from "../assets/Ellipse 57.svg";
import reviewimg1 from "../assets/unsplash_EPi3TRQc5Z0 copy.svg";
import reviewimg2 from "../assets/unsplash_m663zRzRe40 copy.svg";
import reviewimg3 from "../assets/unsplash_7Sz71zuuW4k.svg";
import star from "../assets/Star 7.svg"
import youtube from "../assets/Group 5.png"

function Foodcontainer() {
    const location = useLocation()
    const topic = location.state.topic;
    console.log(location)
    console.log(topic)
    const [searchValue,setSearchValue]= useState(null)
    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
      }
      useEffect(() => {
        fetchrecipeData();
      }, [searchValue]);
      console.log(getCookie('logedin'))
       
      const [data, setData] = useState({ meals:[{strmeal:"No Recipe Found"}] }); 
      const [state, setState] = useState({
        loading: true,
        error: null,
      });
      useEffect(() => {
        fetchNewsData();
      }, [topic]);
      const fetchrecipeData = async () => {
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${(searchValue==null)?'a':searchValue}`);
          setData(response.data); 
          console.log(data)
          setState({ loading: false, error: null });
          console.log(response.data);
        } catch (err) {
          console.error(err);
          setState({ loading: false, error: err });
        }
      };
      const fetchNewsData = async () => {
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${topic}`);
          setData(response.data); 
          console.log(data)
          setState({ loading: false, error: null });
          console.log(response.data);
        } catch (err) {
          console.error(err);
          setState({ loading: false, error: err });
        }
      };
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


    console.log(data.meals)
    const searchParameter =(newState)=>{
        setSearchValue(newState);
        setState({ loading: false, error: "err" });
    }

    

    if(searchValue == null){
      return (
        <>
          <Navbar onChange={searchParameter}></Navbar>
          <div id='Recipe'>
            {data.meals.length > 0 ? ( 
              data.meals.map((meal,index)=>{
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
                    <div onclick="searchYouTubeVideos('${meal.strMeal}')" className="youtube-div" > <img className="star youtube" src={youtube} /><div className="text-recipe">Recipe</div></div>
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
    {data.meals.length > 0 ? ( 
          data.meals.map((meal,index)=>{
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
                <div onclick="searchYouTubeVideos('${meal.strMeal}')" className="youtube-div" > <img className="star youtube" src="./assets/Group 5.png" /><div className="text-recipe">Recipe</div></div>
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



export default Foodcontainer