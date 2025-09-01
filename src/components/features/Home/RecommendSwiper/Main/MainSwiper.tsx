"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import { useCheckResolution } from '@/hooks/useCheckResolution';


export default function MainSwiper() {
  const isMobile = useCheckResolution(768);
  const isTablet = useCheckResolution(1024);

  const slidePerView = isMobile ? 3 : isTablet ? 4 : 5;

  return (
    <Swiper 
      className="w-full flex justify-start"
      spaceBetween={20}
      loop={true}
      slidesPerView={slidePerView}
  >
      {Array(10).fill(0).map((_, index) => (
        <SwiperSlide 
          key={index}
          className='w-[calc(100%/3)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)] aspect-[6/8] rounded-md overflow-hidden cursor-pointer max-h-[250]'
          style={{ boxShadow: "0 0 3px rgba(0,0,0,1)" }}
        >
          <Image
            className='object-cover w-full h-full'
            src={`/mock/mock-titles/mock_${index + 1}.jpg`}
            width={500}
            height={0}
            loading={'lazy'}
            alt=''
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
