import React from "react";
import Banner from "../component/Home/Banner";
import Category from "../component/Home/Category";
import FeaturedProduct from "../component/Home/FeaturedProduct";
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
