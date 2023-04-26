import React from 'react';
import { CardImgConstant } from '../Config';



const RestaurantCard = ({ name, cloudinaryImageId, area, cuisines }) => {

  return (
      <div className='restaurant-card'>
          <img src={ CardImgConstant + cloudinaryImageId} alt='food-image' className='card__img' />
          <h3>{name}</h3>
          <h3>{cuisines.join(" , ")}</h3>
          <h4>{area}</h4>
      </div>
  );
} 

export default RestaurantCard;