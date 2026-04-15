import React from 'react'
import { useSelector } from 'react-redux';

const Countervalue = () => {
    const count = useSelector((state) => state.counter.value);
  return (
    <div>
      {count}  
    </div>
  )
}

export default Countervalue
