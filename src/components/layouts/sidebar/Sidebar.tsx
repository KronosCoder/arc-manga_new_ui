'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useSidebarContext } from '@/contexts/SidebarContext';

  export default function Sidebar() {
    const { isExpanded, toggleSidebar } = useSidebarContext();

    return (
      <aside className={`sidebar sidebar__${isExpanded ? 'open' : 'closed'}`}>
        <div className="flex items-center justify-between">
          <div className="logo__section cursor-pointer">
            <Link href={'/'}>
              <Image
                src="/mock/logo.png"
                width={150}
                height={0}
                alt='website logo'
              />
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
    )
  }
