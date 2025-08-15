'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HomeSwiper() {
  return (
    <Swiper
        className='w-full h-[425px] banner__swiper'
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide className='w-full h-full'>
            <div className="group cursor-pointer h-full">
                <div className="banner__section relative overflow-hidden shadow-lg bg-gray-200 z-[1] h-full">
                    <div className="absolute top-0 h-full w-full flex items-center justify-center">
                        <div className="w-[80%] h-[80%] bg-gray-900/50 rounded-md backdrop-filter backdrop-blur-sm border border-gray-100/20 p-6 text-center left-0"></div>
                    </div>
                    <img 
                        src="/mock/mock_1.jpg" 
                        alt=""
                        className="w-full h-full object-cover object-right-top  "
                        loading="lazy"
                    />
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}
