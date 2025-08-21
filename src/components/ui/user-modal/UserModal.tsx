'use client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    isActive: boolean;
}

export default function UserModal({ isActive }: Props) {
    const [isMounted,setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if (!isMounted) return null;

    if (window.innerWidth < 1024) return ReactDOM.createPortal(
        <div className={`fixed top-0 right-0 w-[250px] h-full bg-white z-[99] transition-all duration-200 ease-in-out ${isActive ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-[100%] pointer-events-none'}`}>

        </div>,
        document.body
    );

    return ReactDOM.createPortal(
        <div className={`${isActive ? 'opacity-100 !scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'} fixed bg-white w-[300px] h-[450px] z-[99] right-20 top-12 transition-all duration-200 ease-in-out rounded-md`}>
            
        </div>,
        document.body
    );
 
}
