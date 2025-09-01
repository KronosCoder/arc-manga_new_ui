'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HomeSwiper from '../../Home/HomeSwiper/HomeSwiper';
import React, { useEffect, useState, useRef } from 'react';
import './HeroSection.css';
import { useCheckResolution } from '@/hooks/useCheckResolution';


export default function HeroSection() {
  const isMobile = useCheckResolution(1024);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  
  const prevButton = useRef<HTMLButtonElement | null>(null);
  const nextButton = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  },[]);

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
              <div className="grid__chevron lg:flex justify-center lg:justify-end items-center gap-4">
                <p 
                  className='hero__img__index font-normal text- xl pointer-events-none'
                >
                  {isMounted ? (isMobile ? '1/10' : 'No.1') : ''}
                </p>
                <button ref={prevButton} className='hero__prev__button w-[40px] aspect-square rounded-full flex items-center justify-center transition-all duration-300ease hover:bg-gray-600 hover:text-white bg-gray-500 text-white lg:bg-transparent lg:text-black'>
                    <ChevronLeft />
                </button>
                <button ref={nextButton} className='hero__next__button w-[40px] aspect-square rounded-full flex items-center justify-center transition-all duration-300ease hover:bg-gray-600 hover:text-white bg-gray-500 text-white lg:bg-transparent lg:text-black'>
                    <ChevronRight />
                </button>
              </div>
            </div>
          </div>
          <HomeSwiper prevButton={prevButton} nextButton={nextButton} />
      </div>
    </>
  )
}
