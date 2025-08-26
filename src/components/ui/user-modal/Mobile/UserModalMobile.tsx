'use client';

import React from 'react'
import { X, User, Droplet, Settings } from 'lucide-react';


interface Props {
    isOpenModal: boolean;
    toggleUserModal: () => void;
}

export default function UserModalMobile({ isOpenModal, toggleUserModal }: Props) {

  return (
    <aside className={`fixed top-0 right-0 w-[300px] h-full bg-gray-100 z-[99] transition-all duration-200 ease-in-out ${isOpenModal ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-[100%] pointer-events-none'} p-6 flex flex-col gap-2`}>
      <div className="flex justify-start">
         <span 
           className='cursor-pointer p-2 transition-all duration-200 ease-in-outhover:bg-slate-200 rounded-full'
           onMouseDown={toggleUserModal}
         >
           <X/>
         </span>
      </div>
      
       {/* User info */}
       <div className="w-full h-32 flex flex-col items-center justify-center transition-allduration-200 ease-in hover:bg-gray-200 cursor-pointer rounded-[3px]">
           <User   
               size={42} 
               className="text-gray-800" 
           />
           <p className='text-xl leading-10 font-bold'>Guest</p>
       </div>
       <hr />
              {/* Setting and Change Themes */}
              <div className="grid grid-cols-2 items-center text-sm gap-2">
           <button 
               className='flex items-center gap-2 px-4 py-2 font-medium transition-allduration-200 ease-in-out hover:bg-slate-200 rounded-md'
           >
               <Settings size={22} strokeWidth={2} />
               <span>Settings</span>
           </button>
           <button 
               className='flex items-center gap-2 px-4 py-2 font-medium transition-allduration-200 ease-in-out hover:bg-slate-200 rounded-md'
           >
               <Droplet size={22} strokeWidth={2} />
               <span>Themes</span>
           </button>
       </div>
       {/* General Buttons  */}
       <button className='flex items-center gap-2 px-4 py-2 font-medium transition-allduration-200 ease-in-out hover:bg-slate-200 rounded-md justify-between'>
         Interface Language
         {/* Is beta? */}
         <span className='bg-black font-semibold uppercase text-xs text-white px-2 py-[2px]rounded-sm'>beta</span>
       </button>
       <button className='flex items-center gap-2 px-4 py-2 font-medium transition-allduration-200 ease-in-out hover:bg-slate-200 rounded-md justify-between'>
         Chapters Language
       </button>
       <button className='flex items-center gap-2 px-4 py-2 font-medium transition-allduration-200 ease-in-out hover:bg-slate-200 rounded-md justify-between'>
         Content Filter
       </button>
       <hr />
       {/* Auth Buttons  */}
       <button className='w-full py-2 font-semibold bg-black text-white rounded-[5px]transition-all duration-200 hover:bg-gray-800'>
           Sign In
       </button>
       <button className='w-full py-2 font-semibold rounded-[5px] transition-all duration-200hover:bg-gray-200'>
           Sign Up
       </button>
    </aside>
  )
}
