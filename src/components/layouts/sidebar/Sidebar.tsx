'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useSidebarContext } from '@/contexts/SidebarContext';
import { useIsMobile } from '@/components/hooks/useIsMobile';
import Image from 'next/image';
import Link from 'next/link';
import './Sidebar.css';
import Overlay from '@/components/ui/background-overlay/Overlay';

export default function Sidebar() {
  const { isExpanded, toggleSidebar } = useSidebarContext();
  const isMobile = useIsMobile(1024);

  
if (!isMobile) {
    return (
      <>
      <Overlay onClick={() => { console.log(isExpanded) }} isModalOpen={isExpanded} />
        <aside className={`sidebar sidebar__${isExpanded ? 'open' : 'closed'} hidden lg:block`}>
          <div className="flex items-center justify-between">
            <div className="logo__section cursor-pointer">
              <Link href="/" className="relative flex items-center gap-1">
                <div className="rounded-full overflow-hidden w-[40px] aspect-square">
                  <Image
                    src="/arc_logo.png"
                    width={100}
                    height={0}
                    alt="Logo ArcManga"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <span className="font-semibold text-xl">ArcManga</span>
              </Link>
            </div>
            <button
              className="flex items-center justify-center bg-slate-200 w-[40px] aspect-square rounded-full cursor-pointer font-medium transition-all duration-200 ease-in-out hover:bg-gray-300"
              onClick={toggleSidebar}
              aria-label=""
            >
              <X />
            </button>
          </div>
        </aside>
      </>
    );
  }

  return (
    <>
      
      <aside className={`sidebar lg:hidden ${isExpanded ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-[-100%]'} z-[999]`}>
        <div className="flex items-center justify-between">
          <div className="logo__section cursor-pointer">
            <Link href="/" className="relative flex items-center gap-1">
              <div className="rounded-full overflow-hidden w-[40px] aspect-square">
                <Image
                  src="/arc_logo.png"
                  width={100}
                  height={0}
                  alt="Logo ArcManga"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <span className="font-semibold text-xl">ArcManga</span>
            </Link>
          </div>
          <button
            className="flex items-center justify-center bg-slate-200 w-[40px] aspect-square rounded-full cursor-pointer font-medium transition-all duration-200 ease-in-out hover:bg-gray-300"
            onClick={toggleSidebar}
            aria-label=""
          >
            <X />
          </button>
        </div>
      </aside>
    </>
  );
}
