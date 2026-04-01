import React, { useRef, useState, useEffect } from 'react'; // useEffect import kora hoyeche
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const Productdetails = () => {
  const settings = {
    speed: 1000,
    slidesToShow: 1,
    arrows:false,
  };
   const vsettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <section className='container grid grid-cols-2 gap-10 py-10'>
      <div>
       <div className="slider-container flex items-center gap-4">
      <div className='w-3/4'>
        <Slider {...settings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
        <div>
          <img src="/pro (5).png" alt="pro (5).png" className='w-full'/>
        </div>
        <div>
          <img src="/pro (6).png" alt="pro (6).png" className='w-full' />
        </div>
        <div>
          <img src="/pro (7).png" alt="pro (7).png" className='w-full'/>
        </div>
        
      </Slider>
      </div>
      <div className='w-1/4'>
        <Slider
      {...vsettings}
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        <div>
          <img src="/pro (5).png" alt="pro (5).png" className='w-full'/>
        </div>
        <div>
          <img src="/pro (6).png" alt="pro (6).png" className='w-full' /> 
        </div>
        <div>
          <img src="/pro (7).png" alt="pro (7).png" className='w-full'/>
        </div>
         <div>
          <img src="/pro (5).png" alt="pro (5).png" className='w-full'/>
        </div>
        <div>
          <img src="/pro (6).png" alt="pro (6).png  " className='w-full' /> 
        </div>
        <div>
          <img src="/pro (7).png" alt="" className='w-full'/>
        </div>
        
        
      </Slider>
      </div>
    </div>
      </div>
      
      <div className='flex items-center justify-center text-3xl font-bold'>
        Product Details
      </div>
    </section>
  );
};

export default Productdetails;