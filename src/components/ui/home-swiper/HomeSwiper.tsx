'use client';

import React, { RefObject } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';

interface HomeSwiperProps {
    prevButton?: RefObject<HTMLButtonElement | null>;
    nextButton?: RefObject<HTMLButtonElement | null>;
}

export default function HomeSwiper({ prevButton, nextButton }: HomeSwiperProps) {
  return (
    <Swiper
        className='w-full h-[325px] lg:h-[425px]'
        spaceBetween={0}
        modules={[Navigation]}
        loop={true}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation;
            if (navigation && typeof navigation !== 'boolean') {
              navigation.prevEl = prevButton?.current ?? undefined;
              navigation.nextEl = nextButton?.current ?? undefined;
            }
         }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}  
    >
        <SwiperSlide className='w-full h-full relative'>
            <div className="group cursor-pointer h-full">
                <section className="banner__section relative overflow-hidden shadow-lg z-[1] h-full">
                    <div className="absolute top-16 lg:top-24 w-full h-full flex flex-col z-[101] py-2">
                        <div className="page__container">
                            <div className="flex">
                                <div className="rounded-md shadow-md h-[10rem] lg:h-[18rem] aspect-[7/10] overflow-hidden">
                                    <img src="/mock/mock_2.jpg" className='w-full h-full object-cover transition-all duration-200 ease-in-out hover:scale-125 hover:brightness-105' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full relative banner__overlay">
                        <Image
                            src="/mock/mock_1.jpg"
                            fill
                            className="w-full h-full object-cover object-right-top opacity-45"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                </section>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full relative'>
            <div className="group cursor-pointer h-full">
                <section className="banner__section relative overflow-hidden shadow-lg z-[1] h-full">
                    <div className="absolute top-16 lg:top-24 w-full h-full flex flex-col z-[101] py-2">
                        <div className="page__container">
                            <div className="flex">
                                <div className="rounded-md shadow-md h-[10rem] lg:h-[18rem] aspect-[7/10] overflow-hidden">
                                    <img src="/mock/mock_2.jpg" className='w-full h-full object-cover transition-all duration-200 ease-in-out hover:scale-125 hover:brightness-105' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full relative banner__overlay">
                        <Image
                            src="/mock/mock_1.jpg"
                            fill
                            className="w-full h-full object-cover object-right-top opacity-45"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                </section>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}
