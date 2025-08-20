'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useSidebarContext } from '@/contexts/SidebarContext';
import Image from 'next/image';
import Link from 'next/link';
import './Sidebar.css';
import { useCheckResolution } from '@/hooks/useCheckResolution';
import Overlay from '@/components/ui/background-overlay/Overlay';

export default function Sidebar() {
  const { isExpanded, toggleSidebar, isMobileExpanded, toggleMobileSidebar } = useSidebarContext();
  const isMobile = useCheckResolution(1024);
  
  return (
    <>
      <Overlay onClick={toggleMobileSidebar} isModalOpen={isMobileExpanded} />
      <aside className={`${!isMobile ? 'sidebar  hidden lg:block' : 'sidebar__mobile block lg:hidden'} ${!isMobile ? (isExpanded ? 'sidebar__open' : 'sidebar__closed') : (isMobileExpanded ? 'sidebar__mobile__open' : 'sidebar__mobile__close')}`}>
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
            className="flex items-center justify-center bg-slate-200 w-[40px] aspect-square rounded-full cursor-pointerfont-medium transition-all duration-200 ease-in-out hover:bg-gray-300"
            onMouseDown={!isMobile ? toggleSidebar : toggleMobileSidebar}
            aria-label=""
          >
            <X />
          </button>
        </div>
      </aside>
    </>
  );
}
