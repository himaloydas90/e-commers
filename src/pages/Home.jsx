import React from "react";
import Banner from "../component/home/Banner";
import Category from "../component/home/Category";
import FeaturedProduct from "../component/home/FeaturedProduct";
import Smartphone from "../component/ui/Smartphone";
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
