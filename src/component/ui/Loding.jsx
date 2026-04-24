// ShopPageSkeleton.jsx
import React from 'react';

const SkeletonBox = ({ className = "", style = {} }) => (
  <div
    className={`relative overflow-hidden bg-gray-200 rounded-md ${className}`}
    style={style}
  >
    {/* শিমার ইফেক্ট লেয়ার */}
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
  </div>
);

// প্রোডাক্ট কার্ডের একক আইটেম
const ProductCardSkeleton = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
    {/* ইমেজ প্লেসহোল্ডার */}
    <SkeletonBox className="w-full h-52 rounded-none" />

    <div className="p-4 space-y-3">
      {/* ক্যাটাগরি ব্যাজ */}
      <SkeletonBox className="h-4 w-16 rounded-full" />

      {/* প্রোডাক্টের নাম */}
      <SkeletonBox className="h-4 w-4/5" />
      <SkeletonBox className="h-3 w-3/5" />

      {/* রেটিং স্টার */}
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <SkeletonBox key={i} className="h-3 w-3 rounded-full" />
        ))}
        <SkeletonBox className="h-3 w-8 ml-1" />
      </div>

      {/* প্রাইস এবং কার্ট বাটন */}
      <div className="flex items-center justify-between pt-1">
        <SkeletonBox className="h-6 w-16" />
        <SkeletonBox className="h-9 w-9 rounded-full" />
      </div>
    </div>
  </div>
);
// ১. শুধু একটি কার্ডের জন্য এই কম্পোনেন্টটি ব্যবহার করুন
 const Loding = () => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm w-full">
    {/* শিমার এনিমেশন স্টাইল */}
    <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
    `}</style>
    
    {/* ইমেজ */}
    <SkeletonBox className="w-full h-52 rounded-none" />

    <div className="p-4 space-y-3">
      {/* ক্যাটাগরি */}
      <SkeletonBox className="h-4 w-16 rounded-full" />

      {/* নাম */}
      <SkeletonBox className="h-4 w-4/5" />
      <SkeletonBox className="h-3 w-3/5" />

      {/* রেটিং */}
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <SkeletonBox key={i} className="h-3 w-3 rounded-full" />
        ))}
      </div>

      {/* প্রাইস */}
      <div className="flex items-center justify-between pt-1">
        <SkeletonBox className="h-6 w-16" />
        <SkeletonBox className="h-9 w-9 rounded-full" />
      </div>
    </div>
  </div>
);
export default Loding;


