import React from 'react'
import { FaCartArrowDown, FaStar } from 'react-icons/fa'

const Carditem = () => {
  return (
     
    <div className='p-2.5 border border-[#E9E9E9] rounded-2xl '>
        <div className='relative rounded-2xl overflow-hidden'>
                <img src="card.png" alt="card" className='w-full' />
                <p className=' absolute left-0 top-0 py-1 px-3 bg-bage'>-25% OFF</p>
            <div className='pt-3.5 px-1'>
               <div className='flex pb-2.5  gap-0.5 text-[#FAC96B]'>
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
                   <FaStar />
               </div>
                <h4 className='text-lg font-normal text-primary'>Headrest Executive Mesh Office Chairset</h4>
                <div className='flex justify-between items-center'>
                    <p className='text-xl font-medium text-brand py-2.5'>৳10500</p>
                    <button>
                        <FaCartArrowDown className='text-3xl text-brand'/>
                    </button>
                </div>
        
            </div>
        </div>
    </div>
                
  )
}

export default Carditem
