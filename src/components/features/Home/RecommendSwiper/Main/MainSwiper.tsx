"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useCheckResolution } from '@/hooks/useCheckResolution';
import SwiperCore from 'swiper';
import { useSwiperOnScroll } from '@/hooks/useSwiperOnScroll';
import { mockData } from '../../../../../mock/mockData';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination'; 
import './MainSwiper.css';

export default function MainSwiper() {
  const isMobile = useCheckResolution(768);
  const isTablet = useCheckResolution(1024);
  const slidePerView = isMobile ? 3 : isTablet ? 4 : 6;
  const swiperRef = useRef<SwiperCore | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Initialize 
  useSwiperOnScroll({ containerRef, swiperRef });

  return (
    <div ref={containerRef} className="w-full py-2">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        loop={true}
        slidesPerView={slidePerView}
        modules={[Navigation, Pagination  ]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full !pb-8"
      >
        {mockData.map((data, index) => (
            <SwiperSlide
              key={index}
              className="!lg:max-w-[260px] aspect-[4/6] flex justify-center items-center pointer-events-auto !shadow-none cursor-default relative  translate-all duration-200 ease-in-out"
            >
              <Link href='/' className="w-full h-full overflow-hidden rounded-md">
                <Image  
                  className="object-cover w-full h-full cursor-pointer rounded-md relative"
                  src={data.image}
                  width={500}
                  height={500}
                  loading="lazy"
                  alt={`Mock image ${index + 1}`}
                />
              </Link>

              <div 
                className="absolute w-full bottom-0 p-4 left-0 h-[60%] flex flex-col justify-end pointer-events-none  rounded-md" 
                style={{ background: "linear-gradient(to top, rgba(0,0,0,1) 20%, transparent)" }}
              >
                <h3 className="text-white text-[9px] md:text-sm ">{data.title}</h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
