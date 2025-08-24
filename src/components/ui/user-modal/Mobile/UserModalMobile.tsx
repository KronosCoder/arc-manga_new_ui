import React from 'react'

interface Props {
    isActive: boolean;
}

export default function UserModalMobile({ isActive }: Props) {
  return (
    <aside className={`fixed top-0 right-0 w-[300px] h-full bg-white z-[99] transition-all duration-200 ease-in-out ${isActive ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-[100%] pointer-events-none'}`}>
       
    </aside>
  )
}
