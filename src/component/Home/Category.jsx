import React from "react";
import { Link } from "react-router";
import { useGetCategoryListQuery } from "../../Services/Api";
import { MdArrowForwardIos } from "react-icons/md";
import Error from "../ui/Error";
import CategoryLoading from "../ui/CategoriLoding";

const Category = () => {
  const {data, isLoading, isFetching, isError, refetch} = useGetCategoryListQuery(); 

  return (
    <section>
      <div className="container">
        <h3 className="heading pb-8">Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1  md:gap-3.5">
          {isLoading || isFetching ? (
            <>
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            <CategoryLoading />
            </>
            ) : isError ? (
            <div className="col-span-full">
              <Error onRetry={refetch} />
            </div>
          ) : (
            
          data?.map((item) => (
            <Link
            to={`/shop?category=${item}`}
              key={item}
              className="p-4 shadow gap-2.5 flex items-center rounded-xl hover:shadow-md transition-shadow"
            >
              <p className="font-normal capitalize text-base text-secondary">
                {item}
              </p>
              <MdArrowForwardIos className="ml-auto text-[#999999]" />
            </Link>
          )))}
        </div>
      </div>
    </section>
  );
};

export default Category;
