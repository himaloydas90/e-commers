import React from 'react'
import { Link } from 'react-router'
import Input from '../ui/input'
import { FaRegHeart, FaRegUser, FaSearch } from 'react-icons/fa'
import Button from '../ui/button'
import { BsCartDash } from 'react-icons/bs'

const navbar = () => {
const catagories =["Home","Pages","Portfolio Layouts","Portfolio Single","Blog"]


  return (
    <header>
      <nav className='py-8'>
          <div className="container flex justify-between items-center">
            <Link to="/">
            <img src="/logo.png" alt="logo" />
            </Link>
            <div className='flex bg-[#F1F1F1] items-center h-fit rounded-md w-full max-w-3xl '>
                <Input placeholder=" I'am loking for...." className='border-none'/> 
                <Button className="rounded-l-none px-5">
                  <FaSearch className='text-xl' />
                </Button>
            </div>
            <div className='flex gap-10'>
              <Link to="/login" className='flex items-center gap-1.5 text-base font-normal text-primary'>
              <FaRegUser />
              login</Link>
              
               <div className='flex items-center gap-1.5'>
              <FaRegHeart />
              Whishlist
            </div>
              <Link to="/login" className='flex items-center gap-1.5 text-base font-normal text-primary'><BsCartDash /> My cart 
                <span className='w-5 h-5 rounded-full text-white text-center flex items-center justify-center bg-red-500'>0</span>
              </Link>
            </div>
           
          </div>
        </nav>
        <div className='container'>
          <ul className='flex gap-14'>
            {
              catagories.map((item)=>(
                <li key={item}>
                 <Link to="/" className='text-base font-medium text-primary uppercase '>{item}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        
      
    </header>
  )
}

export default navbar
