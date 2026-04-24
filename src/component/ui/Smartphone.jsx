import React from "react";
import { Link } from "react-router";
import Card from "./Card";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useGetProductsQuery } from "../../Services/Api";
import Error from "./Error";
import Loding from "./Loding";




const Smartphone = () => {
  const { data, isLoading, isError, isFetching ,refetch} = useGetProductsQuery(
    {limit: 4, 
    skip: 0,
    category: "motorcycle",
  },
    
  );
 
  return (
    <section className="pt-11">
      <div className="container ">
        <div className="flex justify-between items-center">
          <p className="heading">Motorcycles</p>
          <Link to="/shop?category=motorcycle" className="flex items-center font-medium text-base gap-1 text-[#757575]">
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
            </>

          ) : isError ? (
            <div className="col-span-full">
      <Error onRetry={refetch} />
    </div>
          ) : (
          data?.products.map((item) => (
              <Card key={item.id} data={item} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Smartphone;
