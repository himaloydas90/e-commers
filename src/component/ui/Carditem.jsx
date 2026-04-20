import React from "react";
import { FaCartArrowDown, FaStar } from "react-icons/fa";

const Carditem = ({ data }) => {
  if (!data) return null;
  const { image, discount, title, price, rating } = data;
  const mystar = [FaStar, FaStar, FaStar, FaStar, FaStar];

  return (
    <div className="p-2.5 border border-[#E9E9E9] rounded-2xl ">
      <div className="relative rounded-2xl overflow-hidden">
        <img src={data.thumbnail} alt={title} className="w-full" />
        {discount && (
          <p className=" absolute left-0 top-0 py-1 px-3 bg-bage">
            -{discount}% OFF
          </p>
        )}
        <div className="pt-3.5 px-1">
          <div className="flex pb-2.5 items-center  gap-0.5">
            {mystar.map((FaStar, index) => (
              <FaStar
                key={index}
                className={index < rating ? "text-[#FAC96B]" : "text-[#D3D3D3]"}
              />
            ))}
            <p className="text-primary font-normal">(0)</p>
          </div>
          <h4 className="text-lg font-normal text-primary">{title}</h4>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium text-brand py-2.5">৳{price}</p>
            <button>
              <FaCartArrowDown className="text-3xl text-brand" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carditem;
