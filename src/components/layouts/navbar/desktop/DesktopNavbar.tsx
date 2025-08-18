'use client';

import React, { useEffect, useState } from 'react';
import UserIcon from '@/components/ui/user-icon/UserIcon';
import { AlignLeft } from 'lucide-react';
import { useSidebarContext } from '@/contexts/SidebarContext';
import Link from 'next/link';
import Image from 'next/image';


export default function DesktopNavbar() {
  const [isScroll, setScroll] = useState<boolean>(false);
  const { isExpanded, toggleSidebar } = useSidebarContext();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkResolution = () => {
      const yWidth = window.innerWidth < 1024;
      setIsMobile(yWidth);
    }
    checkResolution();

    window.addEventListener('resize', checkResolution); 
    return () => window.removeEventListener('resize', checkResolution);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.pageYOffset; 
      if (y > 0 && !isScroll) {
        setScroll(true)
      } else if (y === 0 && isScroll) {
        setScroll(false);
      }
    }
    window.addEventListener('scroll' , handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isScroll]);

  return (
      <header className={`main__nav fixed lg:top-0 ${isScroll ? 'bg-white border border-b-orange-400' : 'bg-transparent'} flex py-3 z-[2]`}>
        <div className={`page__container w-full flex items-center justify-between`}>
          {/* Left */}
          <div className={`flex items-center justify-start gap-2 ${isMobile || !isExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <AlignLeft className='cursor-pointer' onClick={toggleSidebar} />
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
          <UserIcon />
        </div>
    </header>
  )
}
