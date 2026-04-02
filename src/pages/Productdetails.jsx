import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from '../component/ui/Arros';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaCheck, FaHeart, FaLinkedinIn, FaRegStar, FaStar, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { CiLink } from 'react-icons/ci';
import { MdDone } from 'react-icons/md';
 
 

const Productdetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [val, setVal] =useState(1)
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const plus = ()=>{
  setVal(val+1)
}
const minus = ()=>{
  if(val>1){
  setVal(val-1)

  } // jodi amra previous value er upor depend kori tahole amra function use korte pari
}

  const settings = {
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
  };

  const vsettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const sizes = ['S', 'M', 'L', 'X', 'XL', 'XXL'];


  return (
    <section className='py-14'>
      <div className='container grid grid-cols-1 lg:grid-cols-2 gap-10 py-10'>
        
        {/* Left Side: Slider Section */}
        <div className='grid grid-cols-4 gap-10 items-center'>
          {/* Main Slider Area (with Heading) */}
          <div className='col-span-3'>
            <h2 className=" text-base text-secondary mb-6">Home > Men’s fashion ><span className='text-[#424241]/50'> Men's Stand Collar Leather Jacket s</span></h2>
            <Slider {...settings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
              <div><img src="/pro (5).png" alt="pro" className='w-full' /></div>
              <div><img src="/pro (6).png" alt="pro" className='w-full' /></div>
              <div><img src="/pro (7).png" alt="pro" className='w-full' /></div>
              <div><img src="/pro (6).png" alt="pro" className='w-full' /></div>
              <div><img src="/pro (7).png" alt="pro" className='w-full' /></div>
            </Slider>
             <div className='flex gap-3.5 items-center mt-14'>
                     <p className='text-xl text-primary items-center'>Share</p>
                      <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#5D9DB1]/15 text-brand text-3xl cursor-pointer'>
                        <Link to='/'>
                          <TiSocialFacebook />
                        </Link>
                      </div>
                      <div className='w-10 h-10 flex items-center justify-center rounded-full  bg-[#5D9DB1]/15 text-brand text-xl cursor-pointer'>
                        <Link to='/'>
                          <FaLinkedinIn />
                        </Link>
                      </div>
                      <div className='w-10 h-10 flex items-center justify-center rounded-full  bg-[#5D9DB1]/15 text-brand text-xl cursor-pointer'>
                        <Link to='/'>
                          <BiLogoWhatsapp />
                        </Link>
                      </div>
                      <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#3AB137]/15 text-[#3AB137] text-xl cursor-pointer'>
                        <Link to='/'>
                          <CiLink />
                        </Link>
                      </div>
                      <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#3AB137]/15 text-[#3AB137]  text-xl cursor-pointer'>
                        <FaTwitter />
                      </div>
                    </div>
          </div>
          <Slider
            {...vsettings}
            asNavFor={nav1}
            ref={slider => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div><img src="/pro (5).png" alt="pro" className='w-3/4' /></div>
            <div><img src="/pro (6).png" alt="pro" className='w-3/4' /></div>
            <div><img src="/pro (7).png" alt="pro" className='w-3/4' /></div>
            <div><img src="/pro (6).png" alt="pro" className='w-3/4' /></div>
            <div><img src="/pro (7).png" alt="pro" className='w-3/4' /></div>
          </Slider>
        </div>

        {/* Right Side: Details Section */}
        <div>
         <h1 className="text-2xl font-medium text-primary">
              Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser
            </h1>
              {/* Ratings */}
           <div className='flex items-center gap-4 mt-4 mb-8'>
            <div className='flex items-center gap-1'>
              <span className='text-lg text-primary font-medium'>4.0</span>
              <div className='flex items-center gap-1 text-[#FFB800] text-2xl border-r-2 border-r-[#F2F2F2] pr-3.5'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar className='text-[#BABABA]' />
              <span className='text-[#BABABA] text-lg'>(322)</span>
              </div>
            </div>
            <div className='flex items-center gap-1 text-primary text-lg font-semibold border-r-2 border-r-[#F2F2F2] pr-3.5'>
                <span className='text-[#0AC96D]'><FaCheck /></span>
                4,320
                <span className='text-secondary font-normal'> Sold</span>
            </div>
            <div className='flex items-center gap-3.5'>
                  <FaHeart  className='text-[#C7C7C7]' />
                 <span className='text-brand font-bold'>Add to wishlist</span>
            </div>
           </div>
           {/* Price */}
            <div className="flex items-baseline gap-3 mb-3 mt-8">
              <span className="text-4xl font-semibold text-brand">$976.33</span>
              <span className="text-xl text-[#8D8D8D] line-through">$1,020.99</span>
              <span className="text-lg py-1 px-3 bg-bage text-white rounded">4%</span>
            </div>
            <div className="flex items-center gap-5 mb-6">
              <div className='text-base text-primary'>
              SKU :
              <span className="text-[#757575]">12314124124</span>
              </div>
              <div className="ml-1.5 flex items-center gap-1 text-[#757575]">
                <div className="bg-bage rounded-full p-0.5 text-[8px] text-white">
                  <MdDone />
                </div>
                <span>In Stock</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="text-primary text-lg mb-8 mt-8">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Direct Full Array</li>
                <li>Quantum Dot Technology</li>
                <li>Ambient Mode</li>
              </ul>
            </div>

              {/* Size Selector */}
            <div className="flex items-center gap-5 mb-8">
              <span className="text-lg font-bold text-primary">Size</span>
              <div className="flex gap-2">
                {sizes.map((item) => (
                 <label key={item} htmlFor={item} className={`uppercase py-1 px-2.5 border border-secondary/50 rounded cursor-pointer text-primary text-sm flex items-center gap-1 ${selectedSize === item && 'bg-brand text-white'}`}>
                  {item}
                  <input onChange={(e)=>setSelectedSize(e.target.value)} type="radio" value={item} name='size' id={item} hidden/>
                 </label>
                 
                ))}
              </div>
            </div>
               {/* Quantity */}
            
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-4 sm:gap-6 lg:gap-9 items-center'>
              <div className='flex items-center gap-4'>
                <span className="text-base text-secondary">Quantity:</span>
                 <div className='border border-[#EAEAEA] rounded-sm flex items-center gap-4'>
                  <button onClick={minus} className='py-1.5 px-2 bg-[#EAEAEA] cursor-pointer'>-</button>
                <p  className=''>{val}</p>
              <button onClick={plus} className=' py-1.5 px-2 bg-[#EAEAEA] cursor-pointer'>+</button>
                 </div>
            </div>
              <button className=" bg-brand text-white py-2.5 px-11 rounded cursor-pointer">Add cart</button>
              <button className=" bg-[#EBF4F9] text-brand py-2.5 px-11 rounded cursor-pointer">Buy Now</button>
            </div>

        </div>

      </div>
    </section>
  );
};

export default Productdetails;