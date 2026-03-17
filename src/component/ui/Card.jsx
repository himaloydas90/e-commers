import React from 'react'
import { Link } from 'react-router'
import Carditem from './carditem'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Card = () => {
  return (
    <section className='pt-11'>

            <div className='container '>
                 <div className='flex justify-between items-center'>
                <p className='heading'>Flash Deals</p>
                <Link className='flex items-center font-medium text-base gap-1 text-[#757575]'>View more<FaLongArrowAltRight /></Link>
                </div>
               <div className='grid grid-cols-4 gap-6 pt-5'>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
               </div>
            </div>
       
      
    </section>
  )
}

export default Card
