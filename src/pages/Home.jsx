import React from "react";
import Category from "../component/home/Category";
import FeaturedProduct from "../component/home/FeaturedProduct";
import Smartphone from "../component/ui/Smartphone";
import Banner from "../component/home/Banner";
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
