"use client";

import React, { useState, useEffect, useRef } from 'react';
import './FilterDropdown.css';
import { useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';

export default function FilterDropdown() {
    // Router
    const router = useRouter();

    const defaultItems = [
        { key: 'all', label: 'All' },
        { key: 'favorite', label: 'Favorites' },
    ];
    
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [selectData, setSelectData] = useState<string | null>(defaultItems[0].label ?? null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Set select filter's data
    function handleSelect(optionIndex: number) {
        setSelectData(defaultItems[optionIndex].label);
        // router.push(`?filter=${defaultItems[optionIndex].key}`)
    }

    // Check outside click
    useEffect(() => {
        const handleOutSideClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setIsFocus(false);
            }
        }

        document.addEventListener('mousedown', handleOutSideClick);

        return () => {
             document.removeEventListener('mousedown', handleOutSideClick);
        }
    },[]);

    return (
        <div className="dropdown__wrapper flex gap-2 items-center" ref={dropdownRef}>
            <span>
                Filter Options
            </span>
            <button
                className='bg-gray-100 w-36 py-2 rounded-md text-start px-4 relative border'
                onMouseDown={() => setIsFocus((prev) => !prev)}
            >
                <span>{selectData}</span>
                <span className={`absolute top-0 translate-y-[40%] right-2`}>
                    <ChevronDown className={`text-gray-500  transition-pop  ${isFocus ? 'rotate-[180deg]' : ''}`} />
                </span>

                

                <ul className={`${isFocus ? 'pointer-events-auto h-28 opacity-100' : 'pointer-events-auto h-0 opacity-0'} absolute flex flex-col gap-1 right-0 -bottom-0 translate-y-[110%] bg-gray-100 shadow-sm w-full py-3 rounded-md border transition-pop`}>
                    {defaultItems.map((data,index) => (
                        <li 
                            className={`text-center transition-all duration-200 ease-in-out hover:bg-gray-300 py-2 ${selectData == data.label ? 'bg-gray-300' : ''}`}
                            onMouseDown={() => handleSelect(index)}
                            key={`option-${index}`}
                        >
                            {data.label}
                        </li>
                    ))}
                </ul>
            </button>
        </div>
    );
}