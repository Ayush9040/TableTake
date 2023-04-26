import React, { useState } from 'react';
import { Link } from "react-router-dom";

const loggedInUser = () => {
  return false;
}


const logo = (
  <img src='https://www.shutterstock.com/image-vector/mood-food-lettering-illustration-smile-260nw-1566292654.jpg' alt='logo' className='logo'/>
);

const Header = () => {
  
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return(
    <div className='header'>
      {logo}
      <ul className='nav-links__wrapper'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>

      {
        isLoggedIn ? <button onClick={() => {setIsLoggedIn(false)}}>Logout</button> : <button onClick={() => {setIsLoggedIn(true)}}>LogIn</button>
      }
    </div>
  )
}


export default Header;