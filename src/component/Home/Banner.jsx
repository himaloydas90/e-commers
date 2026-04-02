import React from "react";
import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const settings = {
    dots: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="flex gap-2.5 absolute bottom-6 left-1/2 -translate-x-1/2">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-3 h-3 rounded-full bg-white relative"></button>
    ),
  };

  return (
    <section className="pt-3 pb-12">
      <div className="container flex gap-7">
        <div className="w-[66%]">
          <Slider {...settings}>
            <div>
              <Link to="/">
                <img src="/hero.png" alt="hero" className="w-full" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="/himel (1).jpg" alt="hero" className="w-full" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="himel (7).jpg" alt="hero" className="w-full" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="himel (8).jpg" alt="hero" className="w-full" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="himel (9).jpg" alt="hero" className="w-full" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="himel (10).jpg" alt="hero" className="w-full" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="himel (11).jpg" alt="hero" className="w-full" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="himel (12).jpg" alt="hero" className="w-full" />
              </Link>
            </div>
          </Slider>
        </div>
        <div className="w-[34%] flex flex-col space-y-7">
          <Link to="/">
            <img src="/hero1.png" alt="hero" className="w-full" />
          </Link>
          <Link to="/">
            <img src="/hero2.png" alt="hero" className="w-full" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
