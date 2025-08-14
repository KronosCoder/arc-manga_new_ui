'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HomeSwiper() {
  return (
    <Swiper
        className='w-full h-[425px]'
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide className='w-full'>
            <div className="group cursor-pointer">
                <div className="banner__section relative overflow-hidden shadow-lg bg-gray-200 z-[1]">
                    <img 
                        src="/mock/mock_1.jpg" 
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}
