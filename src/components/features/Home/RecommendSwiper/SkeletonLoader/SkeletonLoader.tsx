'use client';

export default function SkeletonLoader() {
  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:min-h-[300px] animate-pulse">
      <div className="w-full h-[210px] md:h-[280px] lg:h-[320px] rounded-md overflow-hidden bg-gray-300"></div>
      <div className="w-full h-[210px] md:h-[280px] lg:h-[320px] rounded-md overflow-hidden bg-gray-300"></div>
      <div className="w-full h-[210px] md:h-[280px] lg:h-[320px] rounded-md overflow-hidden bg-gray-300"></div>
      <div className="hidden md:block w-full h-[250px] md:h-[280px] lg:h-[320px] rounded-md overflow-hidden bg-gray-300"></div>
      <div className="hidden lg:block w-full h-[250px] md:h-[280px] lg:h-[320px] rounded-md overflow-hidden bg-gray-300"></div>
    </div>
  );
}