import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardImgConstant } from '../Config';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const params = useParams();
  const [ restaurant, setRestaurant ] = useState(null);
  const [ menu, setMenu ] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  },[])

  async function getRestaurantInfo(){
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9230648&lng=77.6464534&restaurantId="+params.id);

    const json = await data.json();
    console.log(json.data);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  } 

  if(!menu) {
    return <Shimmer />
  }

  return (
    <div className='menu-page'>
      <div>
      <h1>Id: {params.id}</h1>
      <h2>{restaurant.name}</h2> 
      <img src={CardImgConstant + restaurant.cloudinaryImageId} />
      <h3>{restaurant.areaName}</h3>
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.avgRating} stars</h3>
      <h3>{restaurant.costForTwoMessage}</h3>
      </div>

      <div className='menu-items'>
        <h1>Most Recommended Section</h1>
        {

          menu.map((item) => {
            return(
              <p key={item.card.info.id}>{item.card.info.name}</p>
            )
          })

          // menu.itemCards.map((item) => {
          //       return(
          //         <p>{item.card.info.name}</p>
          //       )
          //  })
        }
        {console.log(menu)}
      </div>
    </div>
  )
}

export default RestaurantMenu;
