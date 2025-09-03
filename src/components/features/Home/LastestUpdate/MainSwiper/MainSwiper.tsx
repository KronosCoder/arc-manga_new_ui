import React, { useEffect, useState } from 'react'
import { Eye, MessageCircle, Star, User } from 'lucide-react';
import { mockData } from '@/mock/mockData'; 
import { useCheckResolution } from '@/hooks/useCheckResolution';
import Image from 'next/image';
import Link from 'next/link';
import "flag-icons/css/flag-icons.min.css";

export default function MainSwiper() {
    const isMobile = useCheckResolution(768); 
    const displayData =  mockData.slice(0, isMobile ? 4 : 6);

  return (
    <article className="mt-2 lg:mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {displayData.map((update) => (
            <Link
              key={update.id} 
              href={'/'}
              className="flex gap-2 px-2 md:px-4 py-3 md:shadow-sm md:bg-slate-50 rounded-md cursor-pointer hover:bg-slate-100 transition-colors"
              aria-label={`Read ${update.title} manga update`}
              role="article"
            >
              {/* Image */}
              <div className="w-[80px] h-[120px] relative flex-shrink-0">
                <Image
                  className="w-full h-full object-cover rounded-md"
                  src={update.image}
                  width={100}
                  height={140}
                  loading="lazy"
                  alt={update.alt}
                  placeholder="empty"
                />
              </div>

              {/* Details */}
              <section className="flex flex-col justify-between flex-grow gap-1 min-w-0">
                <div className="flex flex-col gap-[4px]">
                  {/* Title */}
                  <h2
                    className="text-base font-semibold truncate max-w-full"
                    title={update.title}
                  >
                    {update.title}
                  </h2>

                  {/* Info */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <div
                      className="rating text-[#ffc916] flex gap-1 items-center text-sm font-bold"
                      aria-label={`Rating: ${update.rating}`}
                    >
                      <Star size={18} strokeWidth={2.8} color="#ffc916" aria-hidden="true" />
                      <span>{update.rating}</span>
                    </div>
                    <div
                      className="visited__count flex items-center gap-1"
                      aria-label={`Views: ${update.views}`}
                    >
                      <Eye size={18} aria-hidden="true" />
                      <span>{update.views}</span>
                    </div>
                    <div
                      className="visited__count flex items-center gap-1"
                      aria-label={`Comments: ${update.comments}`}
                    >
                      <MessageCircle size={18} aria-hidden="true" />
                      <span>{update.comments}</span>
                    </div>
                  </div>

                  {/* Volume  */}
                  <div className="flex gap-2 text-sm font-medium">
                    <span className={`fi fi-${update.country}`} aria-hidden="true"></span>
                    <span className="truncate max-w-[150px]" title={update.volume}>
                      {update.volume}
                    </span>
                  </div>
                </div>

                {/* Author and Published */}
                <div className="w-full flex flex-wrap justify-between gap-1 items-end text-sm min-w-0">
                  <div
                    className="author flex items-end justify-start gap-1"
                    aria-label={`Author: ${update.author}`}
                  >
                    <User aria-hidden="true" />
                    <span className="truncate max-w-[120px]" title={update.author}>
                      {update.author}
                    </span>
                  </div>
                  <div>
                    <span className="truncate max-w-[100px]" title={update.published}>
                      {update.published}
                    </span>
                  </div>
                </div>
              </section>
            </Link>
          ))}
      </div>
    </article>
  )
}
