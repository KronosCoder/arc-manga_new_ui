'use client';

import './HomeSwiper.css';
import { RefObject } from 'react';
import MainSwiper from './Main/MainSwiper';
import SkeletonLoader from './skeleton-loader/HomeSkelton';

interface HomeSwiperProps {
    prevButton?: RefObject<HTMLButtonElement | null>;
    nextButton?: RefObject<HTMLButtonElement | null>;
}

export default function HomeSwiper({ prevButton, nextButton }: HomeSwiperProps) {
    return (
        //  wait for detect data on fetch
        true ? <MainSwiper prevButton={prevButton} nextButton={nextButton} /> : <SkeletonLoader />
    );
}
