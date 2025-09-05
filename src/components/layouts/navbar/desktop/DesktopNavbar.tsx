'use client';

import React, { useEffect, useState } from 'react';
import UserIcon from '@/components/ui/UserIcon/UserIcon';
import { AlignLeft } from 'lucide-react';
import { useSidebarContext } from '@/contexts/SidebarContext';
import Link from 'next/link';
import Image from 'next/image';
import { useCheckResolution } from '@/hooks/useCheckResolution';
import SearchModal from '@/components/features/SearchModal/SearchModal';
import Searchbar from '@/components/features/Home/Searchbar/Searchbar';


export default function DesktopNavbar() {
  const [isScroll, setScroll] = useState<boolean>(false);
  const { isExpanded, toggleSidebar, isMobileExpanded, toggleMobileSidebar } = useSidebarContext();
  const isMobile = useCheckResolution(1024);
  
  useEffect(() => {
    const handleScroll = () => {
      const y = window.pageYOffset; 
        if (y > 2 && !isScroll) {
          setScroll(true)
        } else if (y === 0 && isScroll) {
          setScroll(false);
        }
    }
    handleScroll();
    window.addEventListener('scroll' , handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isScroll]);

  return (
    <header className={`main__nav fixed lg:top-0 ${isScroll ? 'bg-white border border-b-2 border-b-premium-dark' : 'bg-transparent'} flex py-3 z-[20]`}>
      <div className={`page__container w-full flex items-center justify-between`}>
        {/* Left */}
        <div className={`flex items-center justify-start gap-2 ${isMobile || !isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <AlignLeft className='cursor-pointer' onMouseDown={isMobile ? toggleMobileSidebar : toggleSidebar} />
          <Link href={'/'} className={`relative flex items-center gap-1 `}>
            <div className="rounded-full overflow-hidden w-[40px] aspect-square">
              <Image
                src="/arc_logo.png"
                width={100}
                height={0}
                className='w-full h-full object-cover'
                alt='website logo'
              />
            </div>
            <span className='font-semibold text-xl'>ArcManga</span>
          </Link>
        </div>
        {/* Right */}
        <div className="flex items-center gap-2">
          <Searchbar isScroll={isScroll} />
          <UserIcon />
        </div>
      </div>
    </header>
  )
}
