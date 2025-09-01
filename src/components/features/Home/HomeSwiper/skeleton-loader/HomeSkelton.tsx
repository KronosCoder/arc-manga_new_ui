'use client';

import React, { RefObject } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


export default function SkeletonLoader() {
    return (
        <Swiper
            className='w-full h-[325px] lg:h-[425px]'
            spaceBetween={0}
            modules={[Navigation]}
            loop={false}
            slidesPerView={1}
        >
            {[0].map((_, index) => (
                <SwiperSlide key={index} className='w-full h-full relative'>
                    <div className="group cursor-pointer h-full flex gap-4 items-center mt-8">
                        <div className="page__container">
                            <div className="flex gap-3">
                                {/* Skeleton Image */}
                                <div className="rounded-md bg-gray-300 animate-pulse min-w-28 lg:min-w-52 h-[10rem] lg:h-[18rem] aspect-[7/10]"></div>
                                {/* Skeleton Text */}
                                <div className="flex flex-col flex-grow space-y-4">
                                    <div className="h-8 bg-gray-300 animate-pulse rounded w-3/4"></div>
                                    <div className="flex space-x-2">
                                        <div className="h-5 w-16 bg-gray-300 animate-pulse rounded"></div>
                                        <div className="h-5 w-12 bg-gray-300 animate-pulse rounded"></div>
                                        <div className="h-5 w-14 bg-gray-300 animate-pulse rounded"></div>
                                    </div>
                                    <div className="h-20 bg-gray-300 animate-pulse rounded"></div>
                                <div className="h-6 bg-gray-300 animate-pulse rounded w-1/4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>  
    )
}
