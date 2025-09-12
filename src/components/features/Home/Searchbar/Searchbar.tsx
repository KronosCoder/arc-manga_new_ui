import React from 'react'
import { Search } from 'lucide-react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Overlay from '@/components/ui/BackgroundOverlay/Overlay';
import { usePathname } from 'next/navigation';

const SearchModal = dynamic(() => import('./SearchModal/SearchModal'), {
    ssr: false,
    loading: () => null,
});

interface SearchbarProps {
    isScroll: boolean;
}

export default function Searchbar({ isScroll }: SearchbarProps) {
    const [isOpenSearchbar, setIsOpenSearchbar] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const currentPath = usePathname();
    const isFirstPage = currentPath === '/';
    console.log(isFirstPage);

    const toggleSearchbar = () => {
        setIsOpenSearchbar((prev) => !prev);
    }

    const openSearchModal = () => {
        setIsOpenSearchbar(true);
    }

    const closeSearchModal = () => {
        setIsOpenSearchbar(false);
    }

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    }

    return (  
        <>
        <Overlay isModalOpen={isOpenSearchbar} onClick={toggleSearchbar} />
         <div 
            className="flex items-center justify-end gap-4"
            onMouseDown={toggleSearchbar}
         >
            {/* Search Tab */}
            <div className={`w-10 h-10 content-center md:content-none rounded-full  md:w-72 md:h-full md:px-4 md:py-[6px] md:rounded-[0.425rem] cursor-text  ${isScroll || !isFirstPage ? 'bg-gray-200' : 'bg-slate-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 shadow-sm'}`}>
                <div className="block md:flex items-center justify-between overflow-hidden">
                    <Search className='md:hidden mx-auto' size={18} />
                    <span className='search__text hidden md:block w-[50%] overflow-hidden text-ellipsis'>{searchQuery !== '' ? searchQuery : 'Search'}</span>
                    <div className={`hidden md:flex gap-2 justify-end items-center`}>
                        <span className={`text-[11px] text-gray-700 bg-gray-300 rounded-md py-1 px-2`}>Ctrl</span>
                        <span className={`text-[11px] text-gray-700 bg-gray-300 rounded-md py-1 px-2`}>K</span>
                        <Search size={18} />
                    </div> 
                </div>
             </div>
         </div>
        <SearchModal isOpenSearchbar={isOpenSearchbar} onOpen={openSearchModal} onClose={closeSearchModal} onToggle={toggleSearchbar} onSearch={handleSearch} />
        </>
    )
}
