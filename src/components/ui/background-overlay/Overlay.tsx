'use client';

import React from 'react';
import ReactDOM from "react-dom";

interface Props {
    onClick: () => void;
    isModalOpen: boolean;
}

export default function Overlay({ onClick,isModalOpen }: Props) {
    if (typeof window === 'undefined') return null;
    return ReactDOM.createPortal(
        <div 
            className={`${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} overlay fixed w-screen h-screen bg-black/50 top-0 left-0 z-50 transition-all duration-200 ease-in-out`}
            onClick={onClick}
            >
        </div>,
        document.body
    )
}
