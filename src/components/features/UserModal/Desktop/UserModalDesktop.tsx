import React from 'react'
import { User, Settings, Droplet } from 'lucide-react';

interface Props {
    isOpenModal: boolean;
}

export default function UserModalDesktop({ isOpenModal }: Props) {
  return (
    <dialog role="modal" className={`${isOpenModal ? 'opacity-100 !scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'} fixed bg-white w-[250px] h-auto z-[99] right-[3vw] top-12 transition-pop rounded-md p-6 overflow-y-auto flex flex-col gap-2`}>
        {/* User info */}
        <div className="w-full h-32 flex flex-col items-center justify-center  transition-all duration-200 ease-in hover:bg-gray-200 cursor-pointer rounded-[3px]">
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
                className='flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ease-in-out hover:bg-slate-200 rounded-md'
            >
                <Settings size={22} strokeWidth={2} />
                <span>Settings</span>
            </button>
            <button 
                className='flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ease-in-out hover:bg-slate-200 rounded-md'
            >
                <Droplet size={22} strokeWidth={2} />
                <span>Themes</span>
            </button>
        </div>

        {/* General Buttons  */}

        <button className='flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ease-in-out hover:bg-slate-200 rounded-md justify-between'>
            Interface Language
            {/* Is beta? */}
            <span className='bg-black font-semibold uppercase text-xs text-white px-2 py-[2px] rounded-sm'>beta</span>
        </button>

        <button className='flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ease-in-out hover:bg-slate-200 rounded-md justify-between'>
            Chapters Language
        </button>

        <button className='flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ease-in-out hover:bg-slate-200 rounded-md justify-between'>
            Content Filter
        </button>

        <hr />

        {/* Auth Buttons  */}

        <button className='w-full py-2 font-semibold bg-black text-white rounded-[5px] transition-all duration-200 hover:bg-gray-800'>
            Sign In
        </button>

        <button className='w-full py-2 font-semibold rounded-[5px] transition-all duration-200 hover:bg-gray-200'>
            Sign Up
        </button>
        
    </dialog>
  )
}
