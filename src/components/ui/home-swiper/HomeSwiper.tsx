'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function HomeSwiper() {
  return (
    <Swiper
        className='w-full h-[425px] banner__swiper'
        spaceBetween={5}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide className='w-full h-full relative'>
            <div className="group cursor-pointer h-full">
                <section className="banner__section relative overflow-hidden shadow-lg z-[1] h-full">
                    <div className="absolute top-24 w-full h-full flex flex-col z-[101] px-20 py-2">
                        <div className="flex">
                            <div className="rounded-md shadow-md h-[18rem] aspect-[7/10] overflow-hidden">
                                <img src="/mock/mock_2.jpg" className='w-full h-full object-cover transition-all duration-200 ease-in-out hover:scale-125 hover:brightness-105' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full relative banner__overlay">
                        <img 
                            src="/mock/mock_1.jpg" 
                            alt=""
                            className="w-full h-full object-cover object-right-top opacity-45"
                            loading="lazy"
                        />
                    </div>
                </section>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}
