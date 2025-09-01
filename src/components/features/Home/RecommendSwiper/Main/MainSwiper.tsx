"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function MainSwiper() {
  return (
    <Swiper 
      className="w-full flex justify-start"
      spaceBetween={10}
      loop={true}
      slidesPerView={5}
  >
      {Array(5).fill(0).map((_, index) => (
        <SwiperSlide 
          key={index}
          className='w-[calc(100%/5)] aspect-[7/10] bg-red-500'
        >
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
