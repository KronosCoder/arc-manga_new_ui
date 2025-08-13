import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className='lg:sticky lg:top-0 lg:left-0 w-[250px] h-full bg-gray-100 shadow-[inset_0_0_5px_rgba(0,0,0,0.25)] p-5 z-2'>
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
        <div className="flex items-center justify-center bg-slate-200 w-[40px] aspect-square rounded-full cursor-pointer font-medium">
          <X />
        </div>
      </div>
    </aside>
  )
}
