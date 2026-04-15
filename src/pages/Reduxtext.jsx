import React from 'react'
import IncBtn from '../component/ui/IncBtn'
import DecBtn from '../component/ui/DecBtn'
import Countervalue from '../component/ui/Countervalue'

const Reduxtext = () => {
  return (
    <div className='flex justify-center w-3xs items-center gap-7 mt-16'>
      <IncBtn />
      <Countervalue />
      <DecBtn/>
    </div>
  )
}

export default Reduxtext
