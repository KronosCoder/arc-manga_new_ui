"use client";

import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import { useCheckResolution } from '@/hooks/useCheckResolution';
import SwiperCore from 'swiper';
import { useSwiperOnScroll } from '@/hooks/useSwiperOnScroll';

export default function MainSwiper() {
  const isMobile = useCheckResolution(768);
  const isTablet = useCheckResolution(1024);
  const slidePerView = isMobile ? 3 : isTablet ? 4 : 5;
  const swiperRef = useRef<SwiperCore | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // initail function
  useSwiperOnScroll({ containerRef, swiperRef });

  return (
    <div ref={containerRef} className="w-full py-2">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={0}
        loop={true}
        slidesPerView={slidePerView}
        modules={[Navigation]}
        className="w-full"
      >
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide
              key={index}
              className="aspect-[5/7] w-[128px] sm:w-[256px] grid grid-rows-[1fr_2rem] gap-4 pointer-events-auto pb-10 px-4 !shadow-none cursor-default"
            >
              <Image
                className="object-cover w-full h-full cursor-pointer rounded"
                src={`/mock/mock-titles/mock_${index + 1}.jpg`}
                width={500}
                height={0}
                loading={'lazy'}
                alt={`Mock image ${index + 1}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
