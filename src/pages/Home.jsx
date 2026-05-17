import React from "react";
import Banner from "../component/home/Banner";
import Category from "../component/home/Category";
import Smartphone from "../component/ui/Smartphone";
import FeaturedProduct from "../component/home/FeaturedProduct";


const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Smartphone />
      <FeaturedProduct />
    </>
  );
};

export default Home;
