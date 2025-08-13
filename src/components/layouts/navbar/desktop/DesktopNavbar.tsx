'use client';

import React, { useEffect, useState } from 'react';
import UserIcon from '@/components/ui/user-icon/UserIcon';
import { AlignLeft } from 'lucide-react';
import { useSidebarContext } from '@/contexts/SidebarContext';


export default function DesktopNavbar() {
  const [isScroll, setScroll] = useState<boolean>(false);
  const { isExpanded, toggleSidebar } = useSidebarContext();

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
      <header className={`fixed lg:top-0 ${isScroll ? 'bg-white border border-b-orange-400' : 'bg-transparent'} w-screen flex justify-end py-3 z-[2]`}>
        <div className="w-full flex items-center justify-between px-10">
          <div className="flex items-center justify-start">
            <AlignLeft className='cursor-pointer' onClick={toggleSidebar} />
          </div>
          <UserIcon />
        </div>
    </header>
  )
}
