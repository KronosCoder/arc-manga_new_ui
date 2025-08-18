'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useSidebarContext } from '@/contexts/SidebarContext';
import './Sidebar.css';

export default function Sidebar() {
  const { isExpanded, toggleSidebar } = useSidebarContext();
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth > 1024 : false
  );

  useEffect(() => {
    const checkResolution = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkResolution();
    window.addEventListener('resize', checkResolution);
    return () => window.removeEventListener('resize', checkResolution);
  }, []);

  if (isMobile) return (
      <>
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
              className="flex items-center justify-center bg-slate-200 w-[40px] aspect-square rounded-full cursor-pointer font-medium transition-all duration-200 ease-in-out hover:bg-slate-300"
              onClick={toggleSidebar}
              aria-label="สลับแถบด้านข้าง"
            >
              <X />
            </button>
          </div>
        </aside>
      </>
  );

  
  return (
    <>
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
            className="flex items-center justify-center bg-slate-200 w-[40px] aspect-squarerounded-full cursor-pointer font-medium transition-all duration-200 ease-in-outhover:bg-slate-300"
            onClick={toggleSidebar}
            aria-label="สลับแถบด้านข้าง"
          >
            <X />
          </button>
        </div>
      </aside>
    </>
  );
}