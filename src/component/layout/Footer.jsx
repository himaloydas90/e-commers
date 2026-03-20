import React from 'react'
import { FaCarSide, FaFacebook, FaHeadphonesAlt, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
  const order =[
    {
      title:"FREE SHIPPING",
      subtitle:"Order via Campaign",
      icon:FaCarSide
    },
     {
      title:"FyEE SHIPPING",
      subtitle:"Order via Campaign",
      icon:FaCarSide
    },
     {
      title:"FRjE SHIPPING",
      subtitle:"Order via Campaign",
      icon:FaCarSide
    },
     {
      title:"FREf SHIPPING",
      subtitle:"Order via Campaign",
      icon:FaCarSide
    },
  ]
  return (
    <section>
      <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20'>
                {
       order.map((item)=>(
        <div key={item.title} className='flex border-b-2 border-b-[#E5E5E5] pb-12 items-center  gap-4'>
          <div className='text-brand text-5xl'>{<item.icon />}</div>
          <div>
            <h5 className='font-medium text-[20px] text-primary'>{item.title}</h5>
            <p className='text-base font-normal  text-secondary'>{item.subtitle}</p>
          </div >
        </div>
       ))
      }
      </div>
        <div className='grid grid-cols-4'>
          <div>
            <img src="/logo.png" alt="logo" />
            <p className='pt-9 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex gap-1.5'>
            <FaFacebook />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
            </div>

          </div>
          
          <div>
            <h5 className='font-medium text-[20px] pb-6 text-primary'>QUICK LINKS</h5>
            <ul>
              <li className='pb-6'>
                <Link to="/" className='text-base font-normal text-secondary'>About us</Link>
              </li>
                <li className='pb-6'>
                <Link to="/">Contact us</Link>
              </li>
              <li className='pb-6'>
                <Link to="/">Products</Link>
              </li>
              <li className='pb-6'>
                <Link to="/">Login</Link>
              </li>
                <li className='pb-6'>
                <Link to="/">Sign Up</Link>
              </li>
            </ul>
          </div>
          





          <div>
            <h5 className='font-medium text-[20px] pb-6 text-primary'>CUSTOMER AREA</h5>
            <ul>
              <li className='pb-6'>
                <Link to="/" className='text-base font-normal text-secondary'>My Account</Link>
              </li>
                <li className='pb-6'>
                <Link to="/">Orders</Link>
              </li>
              <li className='pb-6'>
                <Link to="/">Terms</Link>
              </li>
              <li className='pb-6'>
                <Link to="/">Privacy Policy</Link>
              </li>
                <li className='pb-6'>
                <Link to="/">Shipping Information</Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[20px] pb-6 text-primary'>CONTACT</h6>
            <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            <div className='flex pb-12 items-center  gap-4'>
          <div className='text-brand text-5xl'><FaHeadphonesAlt /></div>
          <div>
            <h5 className='font-medium text-[20px] text-primary'>Have any question?</h5>
            <p className='text-base font-normal  text-secondary'>099 456 789</p>
          </div >
        </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer
