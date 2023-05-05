import React from 'react';
import { CardImgConstant } from '../Config';



const RestaurantCard = ({ name, cloudinaryImageId, area, cuisines }) => {

  return (
      <div className='w-[200px] p-4 m-3 bg-pink-50 shadow-lg'>
          <img src={ CardImgConstant + cloudinaryImageId} alt='food-image' className='card__img' />
          <h3 className='font-semibold text-xl'>{name}</h3>
          <h3>{cuisines.join(" , ")}</h3>
          <h4>{area}</h4>
      </div>
  );
} 

export default RestaurantCard;