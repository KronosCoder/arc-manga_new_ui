"use client";

import React from 'react';
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface PrevSectionProps {
    headerTitle: string;
}

export default function PrevSection ({ headerTitle }: PrevSectionProps) {
const router = useRouter();
  const redirectPreviousPage = () => {
    router.back()
  };
  return (
    <>
        <div className="prev__section">
          <div 
            className="flex items-center justify-center p-2 transition-all duration-200 ease-in-outcursor-pointer hover:bg-gray-300 rounded-full "
            onMouseDown={redirectPreviousPage}
          >
            <ArrowLeft />
          </div>
          <h1>{headerTitle}</h1>
        </div>  
    </>
  )
}
