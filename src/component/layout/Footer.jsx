import React from 'react'
import { FaCarSide, FaHeadphonesAlt, FaInstagram, FaLinkedinIn, FaStar, FaTwitter } from 'react-icons/fa'
import { GiBackwardTime } from 'react-icons/gi'
import { MdOutlinePayment } from 'react-icons/md'
import { TiSocialFacebook } from 'react-icons/ti'
import { Link } from 'react-router'

const Footer = () => {
  const order =[
    {
      title:"FREE SHIPPING",
      subtitle:"Order via Campaign",
      icon:FaCarSide
    },
     {
      title:"Best Price",
      subtitle:"Quality products",
      icon:FaStar
    },
     {
      title:"Free Retern",
      subtitle:"Within 7 days returns",
      icon:GiBackwardTime
    },
     {
      title:"Secure Payment",
      subtitle:"100% secure payment",
      icon:MdOutlinePayment
    },
  ]
  return (
   <section>
  <div className='container mx-auto'>
    {/* Order Status Section - Responsive Grid */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-2 md:px-20'>
      {order.map((item) => (
        <div key={item.title} className='flex pb-12 items-center gap-4'>
          <div className='text-brand text-5xl'>{<item.icon />}</div>
          <div>
            <h5 className='font-medium text-[20px] text-primary'>{item.title}</h5>
            <p className='text-base font-normal text-secondary'>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Main Footer Grid - Responsive (1 col on mobile, 2 on tablet, 4 on desktop) */}
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 pb-14 pt-14 border-t-2 border-t-[#E5E5E5] border-b-2 border-b-[#E5E5E5]'>
      {/* Logo & About */}
      <div>
        <img src="/logo.png" alt="logo" />
        <p className='pt-9 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='flex gap-1.5'>
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-brand text-white text-3xl cursor-pointer'>
            <TiSocialFacebook />
          </div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-brand text-white text-xl cursor-pointer'>
            <FaLinkedinIn />
          </div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5] text-white text-xl cursor-pointer'>
            <FaTwitter />
          </div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-brand text-white text-xl cursor-pointer'>
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h5 className='font-medium text-[20px] pb-6 text-primary'>QUICK LINKS</h5>
        <ul>
          <li className='pb-6'><Link to="/" className='text-base font-normal text-secondary'>About us</Link></li>
          <li className='pb-6'><Link to="/">Contact us</Link></li>
          <li className='pb-6'><Link to="/">Products</Link></li>
          <li className='pb-6'><Link to="/">Login</Link></li>
          <li className='pb-6'><Link to="/">Sign Up</Link></li>
        </ul>
      </div>

      {/* Customer Area */}
      <div>
        <h5 className='font-medium text-[20px] pb-6 text-primary'>CUSTOMER AREA</h5>
        <ul>
          <li className='pb-6'><Link to="/" className='text-base font-normal text-secondary'>My Account</Link></li>
          <li className='pb-6'><Link to="/">Orders</Link></li>
          <li className='pb-6'><Link to="/">Terms</Link></li>
          <li className='pb-6'><Link to="/">Privacy Policy</Link></li>
          <li className='pb-6'><Link to="/">Shipping Information</Link></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <Link className='font-medium text-[20px] pb-6 text-primary'>CONTACT</Link>
        <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
        <div className='flex pb-12 items-center gap-4'>
          <div className='text-brand text-5xl'><FaHeadphonesAlt /></div>
          <div>
            <h5 className='font-medium text-[20px] text-primary'>Have any question?</h5>
            <p className='text-base font-normal text-secondary'>099 456 789</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Bar - Mobile-e niche-niche thakbe, Desktop-e pasapasi */}
  <div className='container mx-auto px-4 flex flex-col md:flex-row items-center py-5 justify-between gap-4'>
    <p className="text-center md:text-left">Projectnirvoya - © 2021 All Rights Reserved</p>
    <div className='md:flex gap-2 items-center'>
      <p className='text-brand text-xl whitespace-nowrap text-center'>Pay with</p>
      <img src="/pay (13).png" alt="pay" className='w-full' />
    </div>
  </div>
</section>
  )
}

export default Footer
