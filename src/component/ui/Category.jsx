import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { MdHealthAndSafety } from 'react-icons/md'
import { Link } from 'react-router'

const Category = () => {

    const catagori = [
        {
            title:"Health & Household",
            icon:MdHealthAndSafety
        },
        {
            title:"Health & Household",
            icon:MdHealthAndSafety
        },
         {
            title:"Health & Household",
            icon:MdHealthAndSafety
        },
         {
            title:"Health & Household",
            icon:MdHealthAndSafety
        },
         {
            title:"Health & Household",
            icon:MdHealthAndSafety
        },
         {
            title:"Health & Household",
            icon:MdHealthAndSafety
        },
         {
            title:"Health & Household",
            icon:MdHealthAndSafety
        },
         {
            title:"Health & Household",
            icon:MdHealthAndSafety
        },
         {
            title:"Health & Household",
            icon:MdHealthAndSafety
        },
         {
            title:"Health & Household",
            icon:MdHealthAndSafety
        },
    ]
  return (
    <section className='py-12'>
        <div className='container'>
            <h3 className='sub_heading'>Category</h3>
            <div className='mt-8 grid grid-cols-5 gap-3.5'>
              {
                catagori.map((item)=>(
                    <Link key={item.title} to="/" className='p-4 shadow flex items-center rounded-xl'>
                    <item.icon/>
                    <p className='pl-2.5 text-base font-normal text-secondary'>{item.title}</p>
                    <FaChevronRight className='text-[#999999] ml-auto' />
                    
                    
                    
                    </Link>
                ))
              }
            </div>
        </div>
      
    </section>
  )
}

export default Category
