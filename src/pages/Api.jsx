import React, { useEffect, useState } from 'react'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineUserCircle, HiOutlineExternalLink } from 'react-icons/hi';

const API = () => {
    const [Data, setData] = useState([]);
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        setData(data)})
  }, [])

  return (

<div className="p-10 bg-gray-50 min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Data.map((item) => (
      <div 
        key={item.id} className=" bg-white p-8 rounded-3xl shadow-sm border border-secondary/20">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-brand p-3 rounded-2xl text-primary">
            <HiOutlineUserCircle className='text-4xl'/>
          </div>
          <div>
            <h1 className="text-xl font-bold text-brand ">
              {item.name}
            </h1>
            <h2 className="text-sm font-medium text-brand/80">
              @{item.username}
            </h2>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-secondary">
            <HiOutlineMail className="text-secondary text-4xl"  />
            <p className="text-sm font-medium">{item.email}</p>
          </div>
          <div className="flex items-start gap-3 text-secondary">
            <HiOutlineLocationMarker className="text-secondary mt-1 text-4xl"/>
            <div className="text-sm ">
              <span className="block font-semibold text-primary">
                {item.address.city}, {item.address.zipcode}
              </span>
              <span className="text-secondary italic">
                {item.address.street}, {item.address.suite}
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )


}
export default API
