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
  const small = useCheckResolution(768);
  const middle = useCheckResolution(1534);
  const slidePerView = small ? 3 : middle ? 5 : 8;
  const swiperRef = useRef<SwiperCore | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Initialize 
  useSwiperOnScroll({ containerRef, swiperRef });

  return (
    <div ref={containerRef} className="w-full py-2">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
        loop={true}
        slidesPerView={slidePerView}
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="recommended__swiper w-full !pb-8"
      >
        {mockData.map((data, index) => (
            <SwiperSlide
              key={index}
              className="!lg:max-w-[260px] aspect-[4/6] flex justify-center items-center pointer-events-auto !shadow-none cursor-default relative translate-all duration-200 ease-in-out group overflow-hidden rounded-md"
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
                className="absolute w-full h-[60%] transition-pop  bottom-0 p-4 left-0 flex flex-col justify-end pointer-events-none rounded-md bg-gradient-to-t from-black/100 via-black/75 to-transparent translate-y-8 group-hover:translate-y-1 " 
                style={{ transitionDelay: '.1s' }}
              >
                <h3 
                  className="text-white font-medium text-[11px] md:text-sm mb-2 transition-pop group-hover:text-amber-400 truncate">
                  {data.title}
                </h3>
                <span className='text-white text-xs'>
                  John Doe
                </span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
