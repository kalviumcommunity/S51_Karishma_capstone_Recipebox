import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import arrow from '../assets/arrow.png';

function App({onChange}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [inputValue,setInputValue]= useState(null)
  const setInput=(e)=>{
    setInputValue(e.target.value)
    onChange(e.target.value)
  }
  return (
    <>
      <nav className="navbar">
        <Link to='/Home'>
        <div className={`logo_web ${click ? 'hidden' : ''} link`}>
          <img src={logo} alt="Recipe Box" className='link'/>
          <span className='link' style={{textDecoration:'none'}}>Recipe Box</span>
        </div></Link>
        <div className={`overall-nav ${click ? 'width100' : 'width25'}`}>
          <div className={`menu ${click ? 'hidden' : ''}`} id="menu">
            <ul className={`menu-inner ${click ? 'hidden' : ''}`}>
              <li className={`menu-item ${click ? 'hidden' : ''} `} ><Link to='/Home' className='link'>Home</Link></li>
              <li className={`menu-item ${click ? 'hidden' : ''} link`}><Link to='/Recipes' className='link'>Recipes</Link></li>
            </ul>
          </div>
          <div className="search-box">
          <img src={arrow} onClick={()=>{setClick(!click)}} className={`exit ${click ? 'active' : ''}`} alt="" />
            <img onClick={handleClick} className={`btn-search ${click ? 'hidden' : ''}`} src={search} alt="Search" />
            <input onChange={setInput} id="search-bar" type="search" name="search" className={`input-search ${click ? 'active' : ''}`} placeholder="Search here..." /> 
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;