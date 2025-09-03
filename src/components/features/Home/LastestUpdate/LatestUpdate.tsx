'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import SkeletonLoader from './SkeletonLoader/SkeletonLoader';


const MainSwiper = dynamic(() => import('./MainSwiper/MainSwiper'), {
  ssr: false,
  loading: () => <SkeletonLoader />
});

export default function LatestUpdate() {  
  return (
    <MainSwiper />
  );
}
