'use client';

import { useSidebarContext } from '@/contexts/SidebarContext';

import React from 'react'

export default function MobileSidebar() {
    const { isMobileExpanded, toggleMobileSidebar } = useSidebarContext();
    return (
        <>
            <aside className={`fixed top-0 left-0 bg-white rounded-md w-[250px] h-full transition-all duration-200 ease-in-out ${isMobileExpanded ? 'opacity-100 translate-x-0 pointer-events-auto' : 'translate-x-[-100%] pointer-events-none'}`}></aside>
        </>
    )
}
