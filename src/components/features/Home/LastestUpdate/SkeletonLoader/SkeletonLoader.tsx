import React from 'react'
import { useCheckResolution } from '@/hooks/useCheckResolution';


export default function SkeletonLoader() {
  const isMobile = useCheckResolution(768);
  
  return (  
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(isMobile ? 4 : 6).fill(0).map((_,index) => (        
        <div className="animate-pulse flex gap-2 px-2 py-3 bg-gray-200 rounded-md shadow-sm" key={index}>
          {/* Image Skeleton */}
          <div className="w-[80px] h-[120px] bg-gray-300 rounded-md"></div>
          {/* Details Skeleton */}
          <section className="flex flex-col justify-between flex-grow gap-1 min-w-0">
            <div className="flex flex-col gap-[4px]">
                {/* Title Skeleton */}
                <div className="w-full h-[18px] bg-gray-300 rounded-md"></div>

                {/* Info Skeleton */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                <div className="w-[50px] h-[16px] bg-gray-300 rounded-md"></div>
                <div className="w-[40px] h-[16px] bg-gray-300 rounded-md"></div>
                <div className="w-[40px] h-[16px] bg-gray-300 rounded-md"></div>
                </div>

                {/* Volume Skeleton */}
                <div className="w-[120px] h-[16px] bg-gray-300 rounded-md"></div>
            </div>

            {/* Author and Published Skeleton */}
            <div className="w-full flex flex-wrap justify-between gap-1 items-end text-sm min-w-0">
                <div className="w-[80px] h-[16px] bg-gray-300 rounded-md"></div>
                <div className="w-[60px] h-[16px] bg-gray-300 rounded-md"></div>
            </div>
          </section>
        </div>))}
    </div>
  )
}
