import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewItem = ({ image, name, rating, time, comment,className="" }) => {
  return (
    <div className={`flex flex-col gap-4 py-8 ${className}`}>
      <div className="flex items-start gap-4">
        <img 
          src={image || "/pro (5).png"} 
          alt={name} 
          className="w-14 h-14 rounded-md object-cover"
        />
        <div className="flex flex-col gap-1">
          <span className="font-medium text-lg text-primary">{name}</span>
          <div className="flex items-center gap-4 mt-0.5">
            <span className="text-lg font-medium text-primary">{rating.toFixed(1)}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(rating) ? "text-[#FFB340]" : "text-[#A7A7A7]"}
                />
              ))}
            </div>
            <span className="text-lg  text-nowrap text-[#A7A7A7]">{time}</span>
          </div>
        </div>
      </div>
      <p className="text-primary  text-lg">{comment}</p>
    </div>
  );
};

export default ReviewItem;