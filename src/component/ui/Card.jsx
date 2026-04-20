import React from "react";
import { Link } from "react-router";
import Carditem from "./Carditem";
import { FaLongArrowAltRight } from "react-icons/fa";

const Card = () => {
  const products = [
    {
      thumbnail: "image (2).png",
      id: 1,
      discount: 25,
      title: "Headrest Executive Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      thumbnail: "image (3).png",
      id: 2,
      title: " Women fashion dress set",
      price: 10500,
      rating: 5,
    },
    {
      thumbnail: "pro (10).png",
      id: 3,
      discount: 25,
      title: " Headrest Executive Mesh Office Chair set",
      price: 10500,
      rating: 5,
    },
    {
      thumbnail: "image (4).png",
      id: 4,
      discount: 25,
      title: " Women black dress and red hat collections",
      price: 10500,
      rating: 4,
    },
  ];
  return (
    <section className="pt-11">
      <div className="container ">
        <div className="flex justify-between items-center">
          <p className="heading">Flash Deals</p>
          <Link className="flex items-center font-medium text-base gap-1 text-[#757575]">
            View more
            <FaLongArrowAltRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-6 pt-5">
          {products.map((item) => (
            <Carditem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
