'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HomeSwiper from '../home-swiper/HomeSwiper';
import React from 'react';


export default function HeroSection() {
  return (
    <>
        <div className="relative">
            <div className="absolute w-full top-14">
              <div className="page__container">
                <p className='font-normal text-2xl mb-4 hidden lg:block'>Popular New Titles</p>
              </div>
            </div>
            <div className="absolute w-full bottom-0 z-10">
              <div className="page__container">
                <div className="flex justify-center lg:justify-end items-center gap-4">
                    <p className='font-normal text- xl pointer-events-none'>No.1</p>
                    <div className="flex gap-8 items-center">
                        <button className='hero__prev__button w-[40px] aspect-square rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-gray-200'>
                            <ChevronLeft />
                        </button>
                        <button className='hero__next__button w-[40px] aspect-square rounded-full flex items-center justify-center transition-all duration-300 ease hover:bg-gray-200'>
                            <ChevronRight />
                        </button>
                    </div>
                </div>
              </div>
            </div>
            <HomeSwiper />
        </div>
    </>
  )
}
