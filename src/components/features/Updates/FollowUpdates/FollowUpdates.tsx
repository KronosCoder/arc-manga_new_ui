import React from 'react';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

export default function FollowUpdates() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 py-16">
        {Array(10).fill(0).map((_, index) => (
            <div key={index} className="flex gap-2 p-4 rounded-md transition-all duration-300 ease-in-out bg-gray-50 cursor-pointer hover:bg-gray-100 shadow-sm">
                <div className="w-20 aspect-[6/8] rounded-md overflow-hidden shadow-sm">
                    <Image 
                        src={'/mock/mock_chapter/jujutsu-1.jpg'}
                        className='w-full h-full object-cover overflow-hidden rounded-md'
                        width={100}
                        height={0}
                        alt={''}
                    />
                </div>
                <div className="flex flex-grow flex-col justify-between">
                    <div className="update__chapter__details text-lg text-gray-600 font-semibold">
                        <h3 className='leading-3'>Chapter 88</h3>
                        <span>Jujutsu Kaisen Vol.1</span>
                    </div>
                    <div className="flex justify-between items-center font-semibold text-gray-500">
                        <span className='text-sm'>14 hour ago.</span>
                        <div className="flex gap-1 items-center text-sm">
                            <MessageCircle size={16} />
                            <span>14</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </section>
  )
}
