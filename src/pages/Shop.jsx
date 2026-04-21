import React, { useEffect, useState } from "react";
import Dropdown from "../component/ui/Dropdown";
import Carditem from "../component/ui/Carditem";
import { Link } from "react-router";
import { FaChevronDown } from "react-icons/fa";
import { useGetProductsQuery } from "../Services/Api";
import { DefaultPagination } from "../component/ui/Pagination";


const Shop = () => {
  const [limit,setLimit] = useState(30);
  const [pageNum, setPageNum] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const { data, error, isLoading } = useGetProductsQuery({limit,skip: (pageNum - 1) * limit});
  useEffect(() => {
    if (data?.total) {
      setTotalPage(Math.ceil(data?.total / limit));
    }  
  },[data, limit]);

  const categori = [
    { titel: "Health & Household" },
    { titel: "Kids Fashion" },
    { titel: "Toys" }, 
    { titel: "Groceries" },
    { titel: "Men Fashion" },
    { titel: "Women’s Fashion" },
  ];
  const categories = [
    { label: " 12", value: " 12" },
    { label: "24", value: "24" },
    { label: "30", value: " 30" },
    { label: "36", value: "36" },
    { label: "42", value: "42" },
  ];

  return (
    <main className="container grid grid-cols-1 md:grid-cols-12 pt-8 lg:pt-14 pb-14 gap-8 lg:gap-12 items-start ">
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
        <div className="flex flex-col sm:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-[#424241]/50 text-base lg:text-lg font-medium">
              Showing <span className="text-primary">{(pageNum - 1) * limit+1}-{data?.total > limit*pageNum ? limit*pageNum :data?.total}</span> of 
              <span className="text-primary">{data?.total || 0}</span> product
            </p>
          </div>
          <div className="flex items-center gap-3 text-base lg:text-lg font-normal text-[#424241]/50">
            <p>Display :</p>
            <Dropdown
              className="text-lg text-[#424241] "
              label="30"
              options={categories}
              value={limit}
              onSelect={(e) => setLimit(e.value)}
              containerClass="min-w-20"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 lg:pt-5">
          {isLoading
          ? 
            <p>Loading...</p>
          :
          data?.products?.map((item) => (
            <Carditem key={item.id} data={item} />
          ))} 
        </div>
        <DefaultPagination handlePageChange={(page) => setPageNum(page)} pageNum={pageNum} totalPage={totalPage} />
      </div>
      
    </main>
  );
};

export default Shop;
