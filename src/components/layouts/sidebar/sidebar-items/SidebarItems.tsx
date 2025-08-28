import React from 'react';
import { House , Bookmark } from 'lucide-react';
import '../Sidebar.css';

export default function SidebarItems() {
  return (
    <div className='flex flex-col gap-5 my-6'>
        {/* Home Section */}
        <div className="section__home">
            <div className="text-sm flex items-center justify-start gap-1 bg-black py-2 px-2 text-white rounded-md transition-all duration-200 hover:bg-gray-700 cursor-pointer">
                <House size={24} />
                <span className='font-semibold'>Home</span>
            </div>
        </div>

        {/* Follows */}
        <div className="section__follows">
            <div className="text-sm flex items-center text-black font-semibold cursor-default">
                <Bookmark size={24} />
                <span className='font-semibold'>Follows</span>
            </div>
        </div>
    </div>
  )
}
