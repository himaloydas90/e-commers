import React from 'react'
import { MdArrowForwardIos, MdHealthAndSafety } from 'react-icons/md'
import { Link } from 'react-router'

const Category = () => {
    const categori = [
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
              { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
              { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
       { titel:"Health & Household",
        icon : MdHealthAndSafety 
       },
    ]
  return (
    <section>
        <div className='container'>
            <h3 className='heading pb-8'>Category</h3>
          <div className='grid grid-cols-5 gap-3.5'>
             {
            categori.map((item) =>(
                 
                <Link key={item.titel} className='p-4 shadow flex items-center rounded-xl'>
                <item.icon className='text-3xl text-[#0970CD]'/>
                <p className='font-normal text-base text-secondary'>{item.titel}</p>
                <MdArrowForwardIos className='ml-auto text-[#999999]' />
                </Link>
           
            ))
           }
           </div>

        </div>
      
    </section>
  )
}

export default Category
