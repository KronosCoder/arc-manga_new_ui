import React from 'react';
import Sidebar from '@/components/layouts/sidebar/Sidebar';
import DesktopNavbar from '@/components/layouts/navbar/desktop/DesktopNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
        <Sidebar />
        <section className="right__side flex flex-col flex-grow w-full h-full relative">
          <DesktopNavbar />
          {children}
          <footer className="flex md:hidden flex-col gap-4 items-center py-4">
            <div className="flex items-center justify-center text-2xl gap-5">
                <FontAwesomeIcon icon={faDiscord} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faXTwitter} />
            </div>
            <div className="flex flex-col items-center">
                <div className='text-sm'>
                    <span>v1.0.0</span>
                </div>
                <div className='text-sm'>
                    <span>© ArcManga 2025</span>
                </div>
                <div className='text-gray-400 text-sm hover:underline cursor-pointer'>
                    <span>Terms & Policies</span>
                </div>
            </div>
          </footer>
        </section>
    </>
  )
}
