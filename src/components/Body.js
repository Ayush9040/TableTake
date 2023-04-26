import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const filterData = (searchText, restaurant) => {
  const filtereddata = restaurant.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
  return filtereddata;
}; 

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


  
return (allRestaurant.length === 0) ? <Shimmer /> : (
  <div className='body-wrapper'>

    {/* Search */}

    <div className='search-container'>
      <input type='text' className='search' value={searchText} onChange={(e) => {
        setSearchText(e.target.value)
        }} />
      <button onClick={(e) => {
        const data = filterData(searchText, allRestaurant);
        setFilteredRestaurant(data);
      }}>Search</button>
    </div>



    {/* Restaurants */}
    <div className='card-container'>
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