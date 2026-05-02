import React from "react";
import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  
  const settings = {
    dots: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="flex gap-2.5 absolute bottom-14 left-1/2 -translate-x-1/2">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-white"></div>
    ),
  };

  return (
    <section className="pt-3 pb-12">
      <div className="container flex gap-7">
        <div className="w-[66%] mx-h[564px]">
          <Slider {...settings}>
            <div>
              <Link to="/shop?category">
                <img src="/slider (1).jpg" alt="hero" className="w-full rounded-xl object-cover" />
              </Link>
            </div>
            <div>
              <Link to="/shop?category">
                <img src="/slider (2).jpg" alt="hero" className="w-full rounded-xl object-cover" />
              </Link>
            </div>
              <div>
              <Link to="/shop?category">
                <img src="/slider (3).jpg" alt="hero" className="w-full rounded-xl object-cover" />
              </Link>
            </div>
            <div>
              <Link to="/shop?category">
                <img src="/slider (4).jpg" alt="hero" className="w-full rounded-xl object-cover" />
              </Link>
            </div>
            <div>
              <Link to="/shop?category">
                <img src="/slider (2).jpg" alt="hero" className="w-full rounded-xl object-cover" />
              </Link>
            </div>
          </Slider>
        </div>
        <div className="w-[34%] mx-h[564px] flex flex-col space-y-6">
          <Link to="/shop?category=motorcycle" className="block w-full aspect-[3/2] overflow-hidden rounded-lg">
            <img src="/hero3.jpg" alt="hero" className="w-full h-full object-cover" />
          </Link>
          <Link to="/shop?category=womens-dresses" className="block w-full aspect-[3/2] overflow-hidden rounded-lg">
            <img src="/hero2.jpg" alt="hero" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;