import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from '../component/ui/Arros';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaCheck, FaHeart, FaLinkedinIn, FaRegStar, FaStar, FaStarHalfAlt, FaTwitter } from 'react-icons/fa';
import { Link, useParams } from 'react-router';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { CiLink } from 'react-icons/ci';
import { MdDone } from 'react-icons/md';
import ReviewItem from '../component/ui/Reviews';
import { useGetProductDetailsQuery } from '../Services/Api';
import { IoStarHalfOutline } from 'react-icons/io5';
import Error from '../component/ui/Error';
import { ShopLoding } from '../component/ui/ShopLoding';
 
 

const Productdetails = () => {
  const {id} = useParams();
  const {data,isLoading,isError,isFetching,refetch} = useGetProductDetailsQuery(id);

  
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [val, setVal] =useState(1)
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  
  const ratings = [
    { stars: 5, percentage: 79 },
    { stars: 4, percentage: 12 },
    { stars: 3, percentage: 4 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 4 },
  ];
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
    <section className='py-14 container'>
      {
        isLoading || isFetching ? (
          <ShopLoding/>
        ):
        
          isError ?(
          <Error onRetry={refetch}/>
        ):
        (
          <>
          <div className='container grid grid-cols-1 lg:grid-cols-2 gap-10 py-10'>
        
        {/* Left Side: Slider Section */}
        <div className='grid grid-cols-4 gap-10 items-center'>
          {/* Main Slider Area (with Heading) */}
          <div className='col-span-3'>
            <h2 className=" text-base text-secondary mb-6">Home.{data?.category}.<span className='text-[#424241]/50'> {data?.title}</span></h2>
            <Slider {...settings} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
              {data?.images?.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Product Image ${index + 1}`} className='w-full' />
                </div>
              ))}
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
              {data?.images?.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Product Image ${index + 1}`} className='w-3/4' />
                </div>
              ))}
          </Slider>
        </div>

        {/* Right Side: Details Section */}
        <div>
         <h1 className="text-2xl font-medium text-primary">
              {data?.title}
            </h1>
              {/* Ratings */}
           <div className='flex items-center flex-wrap gap-4 mt-4 mb-8'>
            <div className='flex items-center gap-1'>
              <span className='text-lg text-primary font-medium'>{data?.rating.toFixed(1) || 4.0 }</span>
              <div className='flex items-center gap-1 text-[#FFB800] text-2xl border-r-2 border-r-[#F2F2F2] pr-3.5'>
             {[...Array(5)].map((_, index) => {
                  const rating = data?.rating || 0;
                  if (index + 1 <= rating) {
                    return <FaStar key={index} className="text-[#FAC96B]" />;
                  } else if (index < rating && index + 1 > rating) {
                    return <IoStarHalfOutline key={index} className="text-[#FAC96B]" />;
                  } else {
                    return <FaRegStar key={index} className="text-[#D3D3D3]" />;
                  }
              })}
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
              <span className="text-4xl font-semibold text-brand">${data?.price}</span>
              <span className="text-xl text-[#8D8D8D] line-through">{data?.originalPrice || ""}</span>
              <span className="text-lg py-1 px-3 bg-bage text-white rounded">{data?.discountPercentage?.toFixed(0) || ""} % Off</span>
            </div>
            <div className="flex items-center gap-5 mb-6">
              <div className='text-base text-primary'>
              SKU :
              <span className="text-[#757575]">{data?.sku || ""}</span>
              </div>
              <div className="ml-1.5 flex items-center gap-1 text-[#757575]">
                <div className="bg-bage rounded-full p-0.5 text-[8px] text-white">
                  <MdDone />
                </div>
                <span>{data?.availabilityStatus || "In Stock"}({data?.stock || 0})</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="text-primary text-lg mb-8 mt-8">
              <p className="mb-4">{data?.description || ""}</p>
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
            <section className='container'>
        <div className='px-11 bg-white'>
          <h5 className='pt-5 text-2xl font-medium text-brand border-b border-[#F1F1F1] pb-5'>Product details of LED Monitor With High Quality In The World</h5>
              <h6 className='pt-10 pb-5 text-2xl font-bold text-primary'>See the best picture no matter where you sit</h6>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-between border-b border-[#F1F1F1] pb-9  '>
            <div>
              <ul className='list-disc'>  
              <li className='text-lg text-primary space-y-4'>Size : M, L, XL</li>
              <li className='text-lg text-primary space-y-4'>Product Type : Jogger</li>
              <li className='text-lg text-primary space-y-4'>Main Material : Cotton</li>
              <li className='text-lg text-primary space-y-4'>Gender : Male</li>
              <li className='text-lg text-primary space-y-4'>Waist : Mid-rise</li>
            </ul>
            </div>
            <div>
              <ul className='list-disc'>
                  <li className='text-lg text-primary space-y-4'>Zipper : Yes</li>
                  <li className='text-lg text-primary space-y-4'>Pocket : Two front and One Back Pockets.</li>
                  <li className='text-lg text-primary space-y-4'>100% Authentic Product</li>
                  <li className='text-lg text-primary space-y-4'>Product color may slightly vary due to our photography and Sometimes it’s vary on our devices</li>
              </ul>
            </div>
          </div>
          <p className='pt-6 pb-5 text-2xl font-bold text-primary'>Powerful intelligence for perfection</p>
          <p className='text-lg text-primary'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
           <p className='pt-10 pb-6 text-lg text-primary'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>
        </div>
        <div className='mt-11 pb-10 px-11 bg-white'>
          <div className="pt-10">
            <div className="flex md:flex-row flex-col flex-wrap  items-start md:items-center gap-5 md:gap-20">
               <div>
                 <h2 className="text-xl pb-2.5 font-medium text-primary">Customer reviews</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex text-[#FFB340] text-lg">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <span className="text-secondary text-nowrap text-base">4.6 out of 5</span>
                 </div>
              </div>
              <div className="w-52 space-y-2.5">
                {ratings.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-1.5 text-base text-secondary">
                    <span className="text-nowrap">{rating.stars} Stars</span>
                    <div className="flex-1 max-w-52 h-2 bg-[#DBDEDF] rounded-full">
                      <div className="h-full bg-[#FFB340] rounded-full overflow-hidden" style={{ width: `${rating.percentage}%` }}>
                      </div>
                    </div>
                       <span className="w-10 text-secondary text-nowrap">{rating.percentage}%</span>
                  </div>
                ))}
              </div>
              <div>
                <button className=" bg-brand text-white py-2.5 px-11 text-nowrap rounded cursor-pointer">Write a Review</button>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-primary text-2xl border-b border-b-[#F1F1F1] pt-20 pb-5">Reviews ({data?.reviews?.length})</h2>
              {data?.reviews?.map((item) => (
                <ReviewItem 
                  key={item.id} 
                  name={item.reviewerName}
                  rating={item.rating}
                  time={item.date}
                  comment={item.comment}
                  avatar={item.image}
                />
              ))}  
          </div>
          <div className="pt-12 space-y-6">
                  <h3 className="text-2xl font-semibold text-primary">Add Your Review</h3>
                  <p className="text-lg text-[#A7A7A7]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> 
                  <form className="space-y-4 max-w-3xl">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <label className="text-lg  text-primary">Name *</label>
                        <input type="text" className="w-full border border-[#A7A7A7] rounded-sm p-3 text-lg focus:outline-none focus:border-brand" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-lg  text-primary">Email *</label>
                        <input type="email" className="w-full border border-[#A7A7A7] rounded-sm p-3 text-lg focus:outline-none focus:border-brand" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-lg  text-primary">Review *</label>
                      <textarea rows={4} className="w-full border border-[#A7A7A7] rounded-sm p-3 text-lg focus:outline-none focus:border-brand"></textarea>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg  text-primary">Rating :</span>
                      <div className="flex items-center gap-1 text-[#FFB800] text-2xl">
                        <FaStar />
                        <FaStar />
                        <FaStar/>
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                    <button type="submit" className="px-10 py-3 bg-brand text-white text-lg font-bold rounded-sm hover:bg-bage transition-all">
                      Submit
                    </button>
                  </form>
                </div>
        </div>
            </section>
            </>
            )}
    </section>
  );
};

export default Productdetails;