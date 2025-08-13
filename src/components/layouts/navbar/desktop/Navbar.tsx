'use client';

import React, { useEffect, useState } from 'react';
import UserIcon from '@/components/ui/user-icon/UserIcon';
import { AlignLeft } from 'lucide-react';
import { useSidebarContext } from '@/contexts/SidebarContext';


export default function Navbar() {
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
      <header className={`fixed lg:top-0 border border-b-orange-400 ${isScroll ? 'bg-white' : 'bg-transparent'} w-screen flex justify-end py-2 z-[2]`}>
        <div className="page__container flex items-center justify-between">
          <div className="flex items-center justify-start">
            <AlignLeft className='cursor-pointer' onClick={toggleSidebar} />
          </div>
          <UserIcon />
        </div>
    </header>
  )
}
