import React from 'react';
import { FaStar, FaRegStar, FaHeart } from 'react-icons/fa'; // Font Awesome
import { HiOutlineShoppingCart } from 'react-icons/hi'; // Heroicons
import { AiFillHeart } from 'react-icons/ai'; // Ant Design

const ProductCard = ({ image, title, price, discount, isFavorite }) => {
  return (
    <div className="group relative w-full bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      
      {/* Discount Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
          -{discount}% OFF
        </span>
      </div>

      {/* Wishlist Icon */}
      <button className="absolute top-3 right-3 z-10 p-1.5 bg-white/90 rounded-full text-gray-300 hover:text-red-500 transition-colors shadow-sm">
        {isFavorite ? <AiFillHeart className="text-red-500" size={18} /> : <FaRegStar size={18} />}
      </button>

      {/* Image Section */}
      <div className="aspect-square bg-[#F8F9FA] flex items-center justify-center p-4 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Details Section */}
      <div className="p-4">
        {/* Ratings */}
        <div className="flex items-center gap-0.5 mb-1.5">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-orange-400" size={12} />
          ))}
          <FaRegStar className="text-gray-300" size={12} />
          <span className="text-[11px] text-gray-400 ml-1">(0)</span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-700 line-clamp-2 min-h-[40px] mb-3 leading-snug">
          {title}
        </h3>

        {/* Price & Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-blue-600 font-bold text-lg">
              <span className="text-sm mr-0.5">৳</span>{price}
            </span>
          </div>

          <button className="flex items-center justify-center w-9 h-9 rounded-lg border border-blue-100 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-90">
            <HiOutlineShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;