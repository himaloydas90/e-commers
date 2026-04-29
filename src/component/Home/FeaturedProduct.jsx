import React from "react";
import { Link } from "react-router";

import { FaLongArrowAltRight } from "react-icons/fa";
import Card from "../ui/card";
import Button from "../ui/button";
import { useGetProductsQuery } from "../../services/Api";
import Error from "../ui/Error";
import Loding from "../ui/Loding";



const FeatureProduct = () => {
  const { data, isLoading, isError, isFetching ,refetch} = useGetProductsQuery(
    {
      limit:20,
      skip: 0
    }
  );

  return (
    <section className="pt-11">
      <div className="container ">
        <div className="flex justify-between items-center">
          <p className="heading">Feature Product</p>
          <Link to="/shop?category" className="flex items-center font-medium text-base gap-1 text-[#757575]">
            View more
            <FaLongArrowAltRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-6 pt-5">
          {isLoading || isFetching ? (
            <>
            <Loding />
            <Loding />
            <Loding />
            <Loding />
            <Loding />
            <Loding />
            <Loding />
            <Loding />
            <Loding />
            <Loding />
            <Loding />
            <Loding />
            </>
          ) : isError ? (
            <div className="col-span-full">
              <Error  onRetry={refetch} />
            </div>
          ) : (
          data?.products.map((item) => (
            <Card key={item.id} data={item} />
          )))}
        </div>
        <Button className="mt-10 mb-10 mx-auto block">See more</Button>
      </div>
    </section>
  );
};

export default FeatureProduct;
