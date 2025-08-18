'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useSidebarContext } from '@/contexts/SidebarContext';
import './Sidebar.css'; 

  export default function Sidebar() {
    const { isExpanded, toggleSidebar } = useSidebarContext();

    return (
      <>
        <div className={`${isExpanded && window.innerWidth > 1024 ? 'w-[250px] pointer-events-auto' : 'pointer-events-none w-0'} transition-all duration-300 ease-in-out`}></div>
        <aside className={`sidebar sidebar__${isExpanded ? 'open' : 'closed'} hidden lg:block`}>
          <div className="flex items-center justify-between">
            <div className="logo__section cursor-pointer">
              <Link href={'/'} className='relative flex items-center gap-1'>
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
            <div 
              className={`flex items-center justify-center bg-slate-200 w-[40px] aspect-square rounded-full cursor-pointer font-medium transition-all duration-200 ease-int-out hover:bg-slate-300`}
              onClick={toggleSidebar}
            >
              <X />
            </div>
          </div>
        </aside>
      </>
    )
  }
