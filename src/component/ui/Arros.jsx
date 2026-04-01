import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// ১. নেক্সট অ্যারো কম্পোনেন্ট
const NextArrow = ({ onClick, currentSlide, slideCount, ...props }) => {
  return (
    <div 
      {...props} 
      onClick={onClick} 
      className="absolute bottom-[-25px] left-1/2 -translate-x-1/2 cursor-pointer text-xl text-gray-600 hover:text-black transition-all"
    >
      <FaChevronDown />
    </div>
  );
};

// ২. প্রিভিয়াস অ্যারো কম্পোনেন্ট
const PrevArrow = ({ onClick, currentSlide, slideCount, ...props }) => {
  return (
    <div 
      {...props} 
      onClick={onClick} 
      className="absolute top-[-25px] left-1/2 -translate-x-1/2 cursor-pointer text-xl text-gray-600 hover:text-black transition-all"
    >
      <FaChevronUp />
    </div>
  );
};

// ৩. এক্সপোর্ট করা
export { NextArrow, PrevArrow };