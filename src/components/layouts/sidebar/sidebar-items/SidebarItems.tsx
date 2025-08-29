'use client';

import React, { useEffect, useState } from 'react';
import { House, Bookmark, BookOpen, Pin } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { usePathname } from 'next/navigation';
import '../Sidebar.css';
import Link from 'next/link';

export default function SidebarItems() {
    const currentPath = usePathname();

    const getNavItemsClass = (path: string): string => {
        return currentPath === path || currentPath.startsWith(path + '/') ? 'bg-premium-dark text-white font-bold transition-all duration-200 ease-in-out hover:bg-gray-800' : 'hover:bg-gray-200';
    };

    return (
        <section className='flex flex-col gap-4 my-6'>
            {/* Home Section */}
            <div className="section__home flex flex-col gap-2">
                <Link href={'/'} className={`${getNavItemsClass('/')} rounded-md cursor-pointer flex items-center text-sm gap-2 px-2 py-2 transition-all duration-200 ease-in-out`}>
                    <House size={24} />
                    <span className=''>Home</span>
                </Link>
            </div>

            {/* Follows */}
            <div className="section__follows flex flex-col gap-2">
                <div className="px-2 py-2 text-sm flex items-center text-black font-extrabold cursor-default">
                    <Bookmark size={24} />
                    <span className=''>Follows</span>
                </div>
                <Link href={'/updates'} className={`${getNavItemsClass('/updates')} sidebar__items`}>
                    <span>Updates</span>
                </Link>
                <Link href={'/library'} className={`${getNavItemsClass('/library')} sidebar__items`}>
                    <span>Library</span>
                </Link>
                <Link href={'/history'} className={`${getNavItemsClass('/history')} sidebar__items`}>
                    <span>Reading History</span>
                </Link>
            </div>

            {/* Titles */}
            <div className="section__titles flex flex-col gap-2">
                <div className="px-2 py-2 text-sm flex items-center text-black font-extrabold cursor-default gap-2">
                    <BookOpen size={24} />
                    <span className=''>Titles</span>
                </div>
                <div className="sidebar__items">
                    <span>Recently Added</span>
                </div>
                <div className="sidebar__items">
                    <span>Latest Updates</span>
                </div>
                <div className="sidebar__items">
                    <span>Random</span>
                </div>

            </div>  

            {/* Arc */}
            <div className="section__arc flex flex-col gap-2">
                <div className="px-2 py-2 text-sm flex items-center text-black font-extrabold cursor-default gap-2">
                    <Pin size={24} />
                    <span className=''>ArcManga</span>
                </div>
                <div className="sidebar__items">
                    <span>About Us</span>
                </div>
                <div className="sidebar__items">
                    <span>Announcements</span>
                </div>
                <div className="sidebar__items">
                    <span>Site Rules</span>
                </div>
                <div className="sidebar__items">
                    <span>Contact</span>
                </div>
            </div>  

            <hr />

            <footer className="flex flex-col gap-4 items-center">
                <div className="flex items-center justify-center text-xl gap-5">
                    <FontAwesomeIcon icon={faDiscord} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faXTwitter} />
                </div>
                <div className="flex flex-col items-center">
                    <div className='text-xs'>
                        <span>v1.0.0</span>
                    </div>
                    <div className='text-xs'>
                        <span>© ArcManga 2025</span>
                    </div>
                    <div className='text-gray-400 text-xs hover:underline cursor-pointer'>
                        <span>Terms & Policies</span>
                    </div>
                </div>
            </footer>
        </section>
  )
}
