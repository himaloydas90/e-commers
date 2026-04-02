import React from "react";
import Dropdown from "../component/ui/Dropdown";
import Carditem from "../component/ui/Carditem";
import { Link } from "react-router";
import { FaChevronDown } from "react-icons/fa";

const Shop = () => {
  const categori = [
    { titel: "Health & Household" },
    { titel: "Kids Fashion" },
    { titel: "Toys" },
    { titel: "Groceries" },
    { titel: "Men Fashion" },
    { titel: "Women’s Fashion" },
  ];

  const products = [
    {
      image: "image (2).png",
      id: 1,
      discount: 25,
      title: "Headrest Executive Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (10).png",
      id: 2,
      discount: 25,
      title: " Headrest Executive Mesh Office Chair set",
      price: 10500,
      rating: 5,
    },
    {
      image: "image (4).png",
      id: 3,
      discount: 25,
      title: " Women black dress and red hat collections",
      price: 10500,
      rating: 4,
    },
    {
      image: "image (2).png",
      id: 4,
      discount: 25,
      title: "Headrest Executive Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (10).png",
      id: 5,
      discount: 25,
      title: " Headrest Executive Mesh Office Chair set",
      price: 10500,
      rating: 5,
    },
    {
      image: "image (4).png",
      id: 6,
      discount: 25,
      title: " Women black dress and red hat collections",
      price: 10500,
      rating: 4,
    },
    {
      image: "image (2).png",
      id: 7,
      discount: 25,
      title: "Headrest Executive Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (10).png",
      id: 8,
      discount: 25,
      title: " Headrest Executive Mesh Office Chair set",
      price: 10500,
      rating: 5,
    },
    {
      image: "image (4).png",
      id: 9,
      discount: 25,
      title: " Women black dress and red hat collections",
      price: 10500,
      rating: 4,
    },
    {
      image: "image (2).png",
      id: 10,
      discount: 25,
      title: "Headrest Executive Mesh Office Chair",
      price: 10500,
      rating: 4,
    },
    {
      image: "pro (10).png",
      id: 11,
      discount: 25,
      title: " Headrest Executive Mesh Office Chair set",
      price: 10500,
      rating: 5,
    },
    {
      image: "image (4).png",
      id: 12,
      discount: 25,
      title: " Women black dress and red hat collections",
      price: 10500,
      rating: 4,
    },
  ];

  const categories = [
    { label: " Newest Items", value: " Newest Items" },
    { label: " Oldest Items", value: " Oldest Items" },
    { label: "Marketing", value: "marketing" },
  ];

  return (
    // মোবাইলে grid-cols-1 এবং বড় স্ক্রিনে grid-cols-12
    <main className="container grid grid-cols-1 md:grid-cols-12 pt-8 lg:pt-14 pb-14 gap-8 lg:gap-12 items-start">
      <div className="col-span-1 md:col-span-3 md:sticky md:top-5 bg-white h-fit p-4 lg:p-2.5 shadow-sm lg:shadow-none">
        <p className="text-lg font-medium text-primary">Related Categories</p>
        <ul className="space-y-2 mt-3.5 mb-5">
          {categori.map((item) => (
            <li key={item.titel}>
              <Link to="#">
                <p className="text-base text-secondary hover:text-brand transition-all uppercase">
                  {item.titel}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center border-t-2 border-t-[#E5E5E5] pt-5 pb-8">
          <p className="text-lg font-medium text-primary">Filter by</p>
          <FaChevronDown className="text-xl text-primary" />
        </div>
        <input type="range" className="w-full" />
        <p className="text-lg font-medium text-primary pt-5 ">
          <span className="text-[#424241]">Price :</span> $1000 - $10000
        </p>
      </div>
      <div className="col-span-1 md:col-span-9">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-[#424241]/50 text-base lg:text-lg font-medium">
              Showing <span className="text-primary">20</span> of{" "}
              <span className="text-primary">160</span> product
            </p>
          </div>
          <div className="flex items-center gap-3 text-base lg:text-lg font-normal text-[#424241]/50">
            <p>Sort by :</p>
            <Dropdown
              className="text-lg text-[#424241]"
              label="Newest Items"
              options={categories}
              containerClass="min-w-32"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 lg:pt-5">
          {products.map((item) => (
            <Carditem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Shop;
