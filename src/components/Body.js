import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body = () => {
  const [ searchText, setSearchText ] = useState('');
  const [ allRestaurant, setAllRestaurant] = useState([]);
  const [ filteredRestaurant, setFilteredRestaurant ] = useState([]);

  useEffect(() => {
    getRestaurant()  
  }, []);


  async function getRestaurant() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9230648&lng=77.6464534&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    // optional chaining
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if(!isOnline)
  {
    return <h1>Currently, offline check connection!!!</h1>
  }


  
return (allRestaurant?.length === 0) ? <Shimmer /> : (
  <div className='body-wrapper'>

    {/* Search */}

    <div className='search-container p-5 m-2 bg-pink-50'>
      <input type='text' className='p-2 m-2 focus:bg-green-50 focus:border-none' placeholder='Search' value={searchText} onChange={(e) => {
        setSearchText(e.target.value)
        }} />
      <button className='p-1 m-2 text-white bg-purple-500 rounded-md hover:bg-purple-100 hover:text-pink-500' onClick={(e) => {
        const data = filterData(searchText, allRestaurant);
        setFilteredRestaurant(data);
      }}>Search</button>
    </div>



    {/* Restaurants */}
    <div className='flex flex-wrap'>
    {
      filteredRestaurant.map((restaurant) => {
          return(
              <Link to={'/restaurant/'+restaurant.data.id} key={restaurant.data.id}>
                <RestaurantCard {...restaurant.data} />
              </Link>
          )
      })
    }
    </div>
  </div>
)
}

export default Body;