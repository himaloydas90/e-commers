import React from "react";
import { Link } from "react-router";

import { FaLongArrowAltRight } from "react-icons/fa";
import Carditem from "../ui/carditem";
import Button from "../ui/button";

const FeatureProduct = () => {
  const products = [
    {
      image: "pro (16).png",
      id: 1,
      discount: 25,
      title: "Headrest Executive Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (15).png",
      id: 2,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 5,
    },
    {
      image: "pro (14).png",
      id: 3,
      discount: 25,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 5,
    },
    {
      image: "pro (13).png",
      id: 4,
      discount: 25,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (12).png",
      id: 5,
      discount: 25,
      title: "Headrest Executive Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (11).png",
      id: 6,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 5,
    },
    {
      image: "pro (10).png",
      id: 7,
      discount: 25,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 5,
    },
    {
      image: "pro (9).png",
      id: 8,
      discount: 25,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (8).png",
      id: 9,
      discount: 25,
      title: "Headrest Executive Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (7).png",
      id: 10,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 5,
    },
    {
      image: "pro (6).png",
      id: 11,
      discount: 25,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 5,
    },
    {
      image: "pro (5).png",
      id: 12,
      discount: 25,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (4).png",
      id: 13,
      discount: 25,
      title: "Headrest Executive Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (3).png",
      id: 14,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 5,
    },
    {
      image: "pro (2).png",
      id: 15,
      discount: 25,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 5,
    },
    {
      image: "pro (1).png",
      id: 16,
      discount: 25,
      title: " Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
  ];
  return (
    <section className="pt-11">
      <div className="container ">
        <div className="flex justify-between items-center">
          <p className="heading">Feature Product</p>
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
        <Button className="mt-10 mb-10 mx-auto block">See more</Button>
      </div>
    </section>
  );
};

export default FeatureProduct;
