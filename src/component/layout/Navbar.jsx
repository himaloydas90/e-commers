import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Input from "../ui/input";
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import Button from "../ui/button";
import { BsCartDash } from "react-icons/bs";
import { useGetProfileQuery, useLazySearchProductQuery } from "../../services/Api";
import Loding from "../ui/Loding";
import Card from "../ui/card";

const navbar = () => {
  const { data } = useGetProfileQuery();
  const [search, setSearch] = useState("");
  const [handleSearch, { data: serachProduct, isLoading }] = useLazySearchProductQuery();

  useEffect(() => {
    if (search.trim() === "") return;
    const timer = setTimeout(() => {
      handleSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search, handleSearch]);

  const catagories = [
    "men's Fashion",
    "Kid's Fashion",
    "Home & Lifestyle",
    "Arts & Crafts",
    "Computer & Electronics",
    "Food & Grocery",
  ];

  return (
    <header className="relative z-30">
      {search.trim() !== "" && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
          onClick={() => setSearch("")}
        />
      )}

      <nav className="py-8 relative z-40">
        <div className="container flex justify-between items-center flex-wrap md:flex-nowrap gap-5">

          <Link to="/" className="order-1">
            <img src="/logo.png" alt="logo" className="w-full" />
          </Link>

          <div className="flex bg-[#F1F1F1] relative items-center h-fit rounded-md w-full mx-w-20 md:max-w-lg xl:max-w-3xl order-3 md:order-2">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="I'am looking for...."
              className="border-none"
            />
            <Button
              onClick={() => search.trim() !== "" && handleSearch(search)}
              className="rounded-l-none px-5"
            >
              <FaSearch className="text-xl" />
            </Button>
          </div>

          <div className="flex items-center gap-5 md:gap-10 order-2 md:order-3">
            <Link
              to={data ? "/profile" : "/registration"}
              className="flex items-center gap-1.5 text-base font-normal text-primary"
            >
              {data ? (
                <div className="flex items-center gap-2">
                  <img
                    src={data.image}
                    alt="user"
                    className="w-8 h-8 rounded-full border border-brand"
                  />
                  <span className="hidden md:block font-medium">
                    {data.firstName}
                  </span>
                </div>
              ) : (
                <>
                  <FaRegUser />
                  <span className="hidden md:block">login</span>
                </>
              )}
            </Link>

            <Link to="/Shop/:id">
              <div className="flex items-center gap-1.5">
                <FaRegHeart />
                <span className="hidden md:block">Wishlist</span>
              </div>
            </Link>

            <Link
              to="/"
              className="flex items-center gap-1.5 text-base font-normal text-primary"
            >
              <BsCartDash />
              <span className="hidden text-nowrap md:block">My cart</span>
              <span className="w-5 h-5 rounded-full text-white text-center flex items-center justify-center bg-red-500">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Search Dropdown */}
        {search.trim() !== "" && (
          <div className="absolute left-1/2 -translate-x-1/2 bg-white w-full top-full mt-1 max-w-5xl z-40 shadow-lg rounded-2xl border border-gray-100 max-h-[80vh] overflow-y-auto">
            {isLoading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-6 p-5">
                <Loding/>
                <Loding/>
                <Loding/>
                <Loding/>
                <Loding/>
                <Loding/>
                <p className="col-span-full text-center">Loading...</p>
              </div>
            ) : (
              <>
                {serachProduct?.products?.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
                    {serachProduct.products.map((item) => (
                      <div key={item.id} onClick={() => setSearch("")}>
                        <Card data={item} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-5 text-gray-500 text-sm">
                    No products found for "{search}"
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </nav>

      {/* Categories */}
      <div className="container pb-2.5 border-b border-b-[#EFEEEE] relative z-10">
        <ul className="flex gap-14 overflow-x-auto px-1.5">
          {catagories.map((item) => (
            <li key={item}>
              <Link
                to="/"
                className="text-base font-medium text-primary uppercase text-nowrap"
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