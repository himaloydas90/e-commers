import React from "react";
import { BsWrenchAdjustable } from "react-icons/bs";
import { FcBusinesswoman } from "react-icons/fc";
import { GiPocketWatch } from "react-icons/gi";
import { IoLibraryOutline, IoWoman } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import {
  MdAddHomeWork,
  MdArrowForwardIos,
  MdHealthAndSafety,
} from "react-icons/md";
import { PiShirtFoldedLight, PiTShirtFill, PiWatchBold } from "react-icons/pi";
import {
  RiJewelryFill,
  RiLuggageCartFill,
  RiShoppingBag4Fill,
} from "react-icons/ri";
import { Link } from "react-router";

const Category = () => {
  const categori = [
    { titel: "Health & Household", icon: MdHealthAndSafety },
    { titel: "Kids Fashion", icon: PiTShirtFill },
    { titel: "Toys", icon: FcBusinesswoman },
    { titel: "Groceries", icon: RiLuggageCartFill },
    { titel: "Men Fashion", icon: PiShirtFoldedLight },
    { titel: "Women’s Fashion", icon: IoWoman },
    { titel: "Stationary & Books", icon: IoLibraryOutline },
    { titel: "Leather Goods", icon: RiShoppingBag4Fill },
    { titel: "Home & Lifestyle", icon: MdAddHomeWork },
    { titel: "Jewelleries ", icon: RiJewelryFill },
    { titel: "Watches", icon: PiWatchBold },
    { titel: "Man Fashion", icon: GiPocketWatch },
    { titel: "Tools & Hardware", icon: BsWrenchAdjustable },
    { titel: "Pet Supplies", icon: RiShoppingBag4Fill },
    { titel: "Seasonal", icon: LuNotepadText },
  ];
  return (
    <section>
      <div className="container">
        <h3 className="heading pb-8">Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1  md:gap-3.5">
          {categori.map((item) => (
            <Link
              key={item.titel}
              className="p-4 shadow gap-2.5 flex items-center rounded-xl"
            >
              <item.icon className="text-3xl text-[#0970CD]" />
              <p className="font-normal text-base text-secondary">
                {item.titel}
              </p>
              <MdArrowForwardIos className="ml-auto text-[#999999]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
