"use client";

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import { useCheckResolution } from '@/hooks/useCheckResolution';
import SwiperCore from 'swiper';
import { useSwiperOnScroll } from '@/hooks/useSwiperOnScroll';
import { BookOpen } from 'lucide-react';

export default function MainSwiper() {
  const isMobile = useCheckResolution(768);
  const isTablet = useCheckResolution(1024);
  const slidePerView = isMobile ? 3 : isTablet ? 4 : 5;
  const swiperRef = useRef<SwiperCore | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<any>();

  // Initialize 
  useSwiperOnScroll({ containerRef, swiperRef });

  // Fetching mock data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchData();
      } catch(error) {
        console.log('Unexpected error: ' + error);
      }
    }
    
  },[]);

  return (
    <div ref={containerRef} className="w-full py-2">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={10}
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
              className="!lg:max-w-[260px] aspect-[4/6] flex justify-center items-center pointer-events-auto !shadow-none cursor-default"
            >
              <div className="w-full h-full overflow-hidden rounded-md">
                <Image  
                  className="object-cover w-full h-full cursor-pointer relative"
                  src={`/mock/mock-titles/mock_${index + 1}.jpg`}
                  width={500}
                  height={500}
                  loading="lazy"
                  alt={`Mock image ${index + 1}`}
                />

                <div className="absolute inset-0 bg-black/70 rounded-md flex flex-col gap-4 text-white w-full h-full p-4 text-xl font-semibold">
                  <div className="title-details h-[85%] flex flex-col gap-2">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <article
                      className='text-xs font-light'
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit tempora earum accusamus laborum incidunt commodi, ut cum nam perspiciatis, fugiat ullam, ea cumque! Repudiandae, fugiat! Expedita reiciendis tenetur vel autem?
                    </article>
                  </div>
                  <div className="flex flex-grow">
                    <button
                      className='text-base flex gap-2 text-premium-dark bg-white items-center px-4 py-2 rounded-full'
                    >
                      <BookOpen />
                      <span>Read</span>
                    </button>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
