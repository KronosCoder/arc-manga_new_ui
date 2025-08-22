'use client';

import React, { RefObject, useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import './HomeSwiper.css';

import 'swiper/css';

interface HomeSwiperProps {
    prevButton?: RefObject<HTMLButtonElement | null>;
    nextButton?: RefObject<HTMLButtonElement | null>;
}

export default function HomeSwiper({ prevButton, nextButton }: HomeSwiperProps) {
    const mock_genres = ["manhwa", "action", "fantasy", "adventure"];
    const [isRecommended, setIsRecommended] = useState<boolean>(true);

    const handleBeforeInit = useCallback((swiper: any) => {
        const navigation = swiper.params.navigation;
        if (navigation && typeof navigation !== 'boolean') {
            navigation.prevEl = prevButton?.current ?? undefined;
            navigation.nextEl = nextButton?.current ?? undefined;
        } 
    }, [nextButton, prevButton])

    return (
        <Swiper
            className='w-full h-[325px] lg:h-[425px]'
            spaceBetween={0}
            modules={[Navigation]}
            loop={true}
            slidesPerView={1}
            onBeforeInit={handleBeforeInit}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}  
        >
            <SwiperSlide className='w-full h-full relative'>
                <div className="group cursor-pointer h-full">
                    <section 
                        className="banner__section relative overflow-hidden shadow-lg z-[1] h-full"
                        aria-label="Featured Content Slider"
                        role="region"
                    >
                        <div className="absolute top-16 lg:top-24 w-full h-full flex flex-col z-[101] py-2">
                            <div className="page__container">
                                <div className="w-full flex gap-3">
                                    {/* Recommended Content Image */}
                                    <div className="rounded-md shadow-md  min-w-28 lg:min-w-52 h-[10rem] lg:h-[18rem] aspect-[7/10] overflow-hidden">   
                                        <img src="/mock/mock_2.jpg" className='w-full h-full object-cover cursor-pointer' alt="" />
                                    </div>
                                    {/* Recommended Content Details */}
                                    <div className="relative flex flex-col flex-grow flex-wrap">
                                        {/* Title */}
                                        <header>
                                            <h1 className='font-bold text-2xl lg:text-4xl'>Solo Leveling ( All Seasons )</h1>
                                        </header>
                                        {/* Genres */}
                                        <div className="hidden sm:flex flex-wrap gap-1 my-3">   
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
                                        {/* Descrioption */}
                                        <article className="hide-scrollbar hidden lg:block w-[90%] h-full max-h-[150px] overflow-y-scroll flex-wrap">
                                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, omnis quaerat perferendis officia distinctio impedit, possimus reiciendis iure tempore natus exercitationem beatae, quisquam doloribus corporis! Quaerat et odit itaque earum!</p>
                                        </article>

                                        <footer className="absolute bottom-0 left-0 w-full">
                                            <p className='text-sm font-medium'>John Doe</p>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Genres for Mobile */}
                        <div className="absolute w-full bottom-10 left-0 z-10">
                            <div className="page__container">
                                <div className="sm:hidden flex items-center justify-start flex-wrap gap-1 my-3">   
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
