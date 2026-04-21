import React from "react";
import Button from "./Button";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export function DefaultPagination({handlePageChange, pageNum, totalPage}) {
 
  const next = () => {
    if (pageNum === totalPage) return;
 
    handlePageChange(pageNum + 1);
  };
 
  const prev = () => {
    if (pageNum === 1) return;
    handlePageChange(pageNum - 1);
  };
 
  return (
    <div className="flex items-center gap-4 mt-8 justify-end">
      <Button
        className="flex items-center gap-2"
        onClick={prev}
        disabled={pageNum === 1}
      >
        <FaArrowLeftLong  strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {[...Array(totalPage)].map((item, index) => (
          <Button
            key={index + 1}
            variant={pageNum === (index + 1) ? "primary" : "secondary"}
            className="rounded-full"
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
       
      </div>
      <Button
        className="flex items-center gap-2"
        onClick={next}
        disabled={pageNum === totalPage}
      >
        Next
        <FaArrowRightLong strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}