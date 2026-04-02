import React from "react";
import { Link } from "react-router";
import Input from "../ui/input";
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import Button from "../ui/button";
import { BsCartDash } from "react-icons/bs";

const navbar = () => {
  const catagories = [
    "men's Fashion",
    "Kid's Fashion",
    "Home & Lifestyle",
    "Arts & Crafts",
    "Computer & Electronics",
    "Food & Grocery",
  ];

  return (
    <header>
      <nav className="py-8">
        <div className="container flex justify-between items-center flex-wrap md:flex-nowrap gap-5">
          <Link to="/" className="order-1">
            <img src="/logo.png" alt="logo" className="w-full" />
          </Link>
          <div className="flex bg-[#F1F1F1] items-center h-fit rounded-md w-full mx-w-20 md:max-w-lg xl:max-w-3xl order-3 md:order-2">
            <Input placeholder=" I'am loking for...." className="border-none" />
            <Button className="rounded-l-none px-5">
              <FaSearch className="text-xl" />
            </Button>
          </div>
          <div className="flex gap-5 md:gap-10 order-2 md:order-3">
            <Link
              to="/login"
              className="flex items-center gap-1.5 text-base font-normal text-primary"
            >
              <FaRegUser />
              <span className="hidden md:block">login</span>
            </Link>

            <div className="flex items-center gap-1.5">
              <FaRegHeart />
              <span className="hidden md:block">Wishlist</span>
            </div>
            <Link
              to="/login"
              className="flex items-center gap-1.5 text-base font-normal text-primary"
            >
              <BsCartDash />
              <span className="hidden md:block">My cart</span>
              <span className="w-5 h-5 rounded-full text-white text-center flex items-center justify-center bg-red-500">
                0
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <div className="container pb-2.5 border-b border-b-[#EFEEEE]">
        <ul className="flex gap-14 overflow-x-auto px-1.5">
          {catagories.map((item) => (
            <li key={item}>
              <Link
                to="/"
                className="text-base font-medium text-primary uppercase text-nowrap "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default navbar;
