import React from 'react';
import { Star } from './svgs/Star';

const Rating = ({ rate }) => {
    const fullStars = Math.floor(rate);
    const halfStarPercentage = (rate - fullStars) * 100;
    const emptyStar = 5 -  Math.ceil(rate);
    

  return (
    <div className="flex">
      {Array.from({ length: fullStars }, (_, index) => (
        <Star key={index} fillPercentage={100} />
      ))}
      {halfStarPercentage > 0 && (
        <Star fillPercentage={halfStarPercentage} />
      )}
      {Array.from({ length: emptyStar }, (_, index) => (
        <Star key={index} fillPercentage={0} />
      ))}
    </div>
  );
};

export default Rating;
