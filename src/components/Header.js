import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useOnline from '../utils/useOnline';

const loggedInUser = () => {
  return false;
}


const logo = (
  <img src='https://www.shutterstock.com/image-vector/mood-food-lettering-illustration-smile-260nw-1566292654.jpg' alt='logo' className='h-12'/>
);

const Header = () => {
  
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const isOnline = useOnline();

  return(
    <div className='flex align-center p-4 justify-between shadow-md m-4 bg-pink-50'>
      {logo}
      <ul className='flex'>
        <li className='p-2'><Link to="/">Home</Link></li>
        <li className='p-2'><Link to="/about">About</Link></li>
        <li className='p-2'><Link to="/contact">Contact</Link></li>
        <li className='p-2'><Link to="/cart">Cart</Link></li>
        <li className='p-2'><Link to="/instamart">Instamart</Link></li>
      </ul>

      <h3 className='p-2'>{isOnline ? '😀' : '😪'}</h3>

      {
        isLoggedIn ? <button onClick={() => {setIsLoggedIn(false)}}>Logout </button> : <button onClick={() => {setIsLoggedIn(true)}}>LogIn</button>
      }
    </div>
  )
}


export default Header;