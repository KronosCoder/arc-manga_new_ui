// Main Swiper ( Self Publish )

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

export default function MainSwiper() {
  // State
  const small = useCheckResolution(768);
  const middle = useCheckResolution(1534);
  const slidePerView = small ? 3 : middle ? 5 : 6;
  const swiperRef = useRef<SwiperCore | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Self Publish ( Mock Data )
  const selfPublishData = [...mockData].reverse();
  // console.log(selfPublishData)

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
        className="recommended__swiper w-full !pb-8"
      >
        {selfPublishData.map((data, index) => (
            <SwiperSlide
              key={index}
              className="!lg:max-w-[260px] aspect-[4/6] flex justify-center items-center pointer-events-auto !shadow-none cursor-default relative  translate-all duration-200 ease-in-out group overflow-hidden rounded-md"
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
                className="absolute w-full h-[60%] transition-pop bottom-0 px-4 py-1 left-0 flex flex-col justify-end pointer-events-none rounded-md bg-gradient-to-t from-black/100 via-black/75 to-transparent group-hover:translate-y-1 leading-3" 
                style={{ transitionDelay: '.1s' }}
              >
                <h3 
                  className="text-white font-medium text-[11px] md:text-xs mb-2 transition-colors group-hover:text-amber-400 truncate"
                >
                  {data.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
