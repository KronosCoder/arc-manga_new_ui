'use client';
import React from 'react';
import ReactDOM from 'react-dom';

interface Props {
    isActive: boolean;
}

export default function UserModal({ isActive }: Props) {
    if (typeof window === 'undefined') return null;
    return ReactDOM.createPortal(
        <div className={`${isActive ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'} absolute bg-white w-[300px] h-[450px] z-[99] right-20 top-12 transition-all duration-200 ease-in-out rounded-md`}>
            
        </div>,
        document.body
    )
}
