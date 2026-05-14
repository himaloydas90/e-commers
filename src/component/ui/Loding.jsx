// ShopPageSkeleton.jsx
import React from 'react';

const SkeletonBox = ({ className = "", style = {} }) => (
  <div
    className={`relative overflow-hidden bg-gray-200 rounded-md ${className}`}
    style={style}
  >
    
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite]  from-transparent via-white/50 to-transparent" />
  </div>
);


const ProductCardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
   
    <SkeletonBox className="w-full h-52 rounded-none" />

    <div className="p-4 space-y-3">
      
      <SkeletonBox className="h-4 w-16 rounded-full" />

      
      <SkeletonBox className="h-4 w-4/5" />
      <SkeletonBox className="h-3 w-3/5" />

 
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <SkeletonBox key={i} className="h-3 w-3 rounded-full" />
        ))}
        <SkeletonBox className="h-3 w-8 ml-1" />
      </div>

      <div className="flex items-center justify-between pt-1">
        <SkeletonBox className="h-6 w-16" />
        <SkeletonBox className="h-9 w-9 rounded-full" />
      </div>
    </div>
  </div>
);

 const Loding = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm w-full">
   
    <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
    `}</style>
    
  
    <SkeletonBox className="w-full h-52 rounded-none" />

    <div className="p-4 space-y-3">
   
      <SkeletonBox className="h-4 w-16 rounded-full" />

    
      <SkeletonBox className="h-4 w-4/5" />
      <SkeletonBox className="h-3 w-3/5" />

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <SkeletonBox key={i} className="h-3 w-3 rounded-full" />
        ))}
      </div>

    
      <div className="flex items-center justify-between pt-1">
        <SkeletonBox className="h-6 w-16" />
        <SkeletonBox className="h-9 w-9 rounded-full" />
      </div>
    </div>
  </div>
);
export default Loding;


