import React from 'react'
import { Search } from 'lucide-react';
import SearchModal from '../../SearchModal/SearchModal';
import { useState } from 'react';

interface Props {
    isScroll: boolean;
}

export default function Searchbar({ isScroll }: Props) {
    const [isOpenSearchbar, setIsOpenSearchbar] = useState<boolean>(false);
    const toggleSearchbar = () => {
        setIsOpenSearchbar((prev) => !prev);
    }

    return (  
        <>
         <div 
            className="flex items-center justify-end gap-4"
            onMouseDown={toggleSearchbar}
         >
            {/* Search Tab */}
            <div className={`w-10 h-10 content-center md:content-none rounded-full  md:w-72 md:h-full md:px-4 md:py-[6px] md:rounded-[0.425rem] cursor-text  ${isScroll ? 'bg-gray-200' : 'bg-slate-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 shadow-sm'}`}>
                <div className="block md:flex items-center justify-between">
                    <Search className='md:hidden mx-auto' size={18} />
                    <span className='hidden md:block'>Search</span>
                    <div className="hidden md:flex gap-2 justify-end items-center">
                        <span className={`text-[11px] text-gray-700 bg-gray-300 rounded-md py-1 px-2`}>Ctrl</span>
                        <span className={`text-[11px] text-gray-700 bg-gray-300 rounded-md py-1 px-2`}>K</span>
                        <Search size={18} />
                    </div> 
                </div>
             </div>
         </div>
        <SearchModal isOpenSearchBar={isOpenSearchbar} toggleSearchbar={toggleSearchbar} />
        </>
    )
}
