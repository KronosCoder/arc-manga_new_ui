'use client';

import dynamic from 'next/dynamic'
import React from 'react'
import SkeletonLoader from './SkeletonLoader/SkeletonLoader';

const MainSwiper = dynamic(() => import('./Main/MainSwiper'), {
  ssr: false,
  loading: () => <SkeletonLoader />
});

export default function RecommendSwiper() {
  return (
    <MainSwiper />
  )
}
