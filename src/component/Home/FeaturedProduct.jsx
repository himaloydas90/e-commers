import React from 'react'
import { Link } from 'react-router'

import { FaLongArrowAltRight } from 'react-icons/fa'
import Carditem from '../ui/carditem'
import Button from '../ui/button'

const FeatureProduct = () => {
  return (
    <section className='pt-11'>
            <div className='container '>
                 <div className='flex justify-between items-center'>
                <p className='heading'>Feature Product</p>
                <Link className='flex items-center font-medium text-base gap-1 text-[#757575]'>View more<FaLongArrowAltRight /></Link>
                </div>
               <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-6 pt-5'>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
                <Carditem/>
               </div>
               <Button className='mt-10 mb-10 mx-auto block'>See more</Button>
            </div>
            
       
      
    </section>
  )
}

export default FeatureProduct

