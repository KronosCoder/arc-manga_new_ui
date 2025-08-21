'use client';

import React, { RefObject, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';

interface HomeSwiperProps {
    prevButton?: RefObject<HTMLButtonElement | null>;
    nextButton?: RefObject<HTMLButtonElement | null>;
}

export default function HomeSwiper({ prevButton, nextButton }: HomeSwiperProps) {
    const mock_genres = ["manhwa", "action", "fantasy", "adventure"];
    const [isRecommended, setIsRecommended] = useState<boolean>(true);

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
                                <div className="w-full flex gap-3">
                                    <div className="rounded-md shadow-md  min-w-28 lg:min-w-52 h-[10rem] lg:h-[18rem] aspect-[7/10] overflow-hidden">   
                                        <img src="/mock/mock_2.jpg" className='w-full h-full object-cover transition-all duration-200 ease-in-out hover:scale-125 hover:brightness-105' alt="" />
                                    </div>
                                    <div className="flex flex-col flex-grow flex-wrap">
                                        <h1 className='font-bold text-xl lg:text-4xl'>Solo Leveling ( All Seasons )</h1>
                                        <div className="hidden lg:flex flex-wrap gap-1 my-3">   
                                            {mock_genres.map((genre) => (
                                                <span 
                                                    className="genres inline-flex items-center rounded uppercase text-[0.625rem] font-bold px-[0.375rem] leading-[1.5em] my-auto text-gray-900 bg-gray-50"
                                                    key={genre}
                                                >
                                                    {genre}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-full bottom-10 left-0 z-10">
                            <div className="page__container">
                                <div className="lg:hidden flex items-center justify-start flex-wrap gap-1 my-3">   
                                    {isRecommended && (
                                        <span 
                                            className="genres inline-flex items-center rounded uppercase text-[0.625rem] font-bold px-[0.375rem] leading-[1.5em] my-auto text-white bg-orange-400"
                                        >
                                            Recommended
                                        </span>
                                    )}
                                    {mock_genres.map((genre) => (
                                        <span 
                                            className="genres inline-flex items-center rounded uppercase text-[0.625rem] font-bold px-[0.375rem] leading-[1.5em] my-auto text-gray-900 bg-gray-50"
                                            key={genre}
                                        >
                                            {genre}
                                        </span>
                                    ))}
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
