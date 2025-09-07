import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    isOpenSearchbar: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpenSearchbar, onClose }: Props) {
    const inputRef = useRef<HTMLInputElement | null>(null);
    useBodyScrollLock(isOpenSearchbar);

    useEffect(() => {
        if (isOpenSearchbar && inputRef.current) {
            //  setTimeout 0 = wait for dom laoded
            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);
        }
    }, [isOpenSearchbar]);

    return ReactDOM.createPortal( 
        <>
            <div
                className={`fixed top-5 left-[50%] translate-x-[-50%] h-auto bg-white px-4 py-2 ${isOpenSearchbar ? 'pointer-events-auto z-[1000]  w-[90%] md:w-[40%]' : 'opacity-0 pointer-events-none z-[-1] w-0'} transition-pop rounded-md`}
            >
                <input 
                    ref={inputRef}
                    type="text" 
                    className='w-full h-full unset__input'
                    name="" 
                    id="" 
                    placeholder='Search ...'
                />
            </div>

            <div className={`fixed top-[4.25rem] left-[50%] translate-x-[-50%] w-[90%] md:w-[40%] bg-white px-4 py-2 ${isOpenSearchbar ? ' transition-pop-delay-400 opacity-100 pointer-events-auto z-[1000] h-auto' : 'opacity-0 pointer-events-none z-[-1] h-0'} rounded-md overflow-hidden`}>
                <h1>Enter a search query...</h1>
            </div>
        </>, document.body
    );
}   
