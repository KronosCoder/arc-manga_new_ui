'use client';

import Overlay from '@/components/ui/BackgroundOverlay/Overlay';
import React, { useState } from 'react'
import ReactDOM from 'react-dom';

interface Props {
    isOpenSearchBar: boolean;
    toggleSearchbar: () => void;
}

export default function SearchModal({ isOpenSearchBar, toggleSearchbar }: Props) {
  return ReactDOM.createPortal( 
    <>
        <Overlay isModalOpen={isOpenSearchBar} onClick={toggleSearchbar} />
        {isOpenSearchBar && (
            <div className={`fixed w-full h-full flex justify-start items-center flex-col z-[99] py-3`}>
                <div className={`${isOpenSearchBar ? 'opacity-100 pointer-events-none scale-100' : 'opacity-0 pointer-events-none scale-90'} transition-pop bg-white w-[60%]`}>
                    <h1>Hello</h1>
                </div>
            </div>
        )}
    </>,document.body
  )
}
