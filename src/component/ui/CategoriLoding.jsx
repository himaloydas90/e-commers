import React from 'react'

const CategoryLoading = () => {
  return (
    <div className="p-4 shadow flex items-center rounded-xl bg-gray-50 animate-pulse">
        <div className="h-5 w-24 bg-gray-200 rounded"></div>
        <div className="ml-auto h-4 w-4 bg-gray-200 rounded-full"></div>
      </div>
  )
}

export default CategoryLoading
