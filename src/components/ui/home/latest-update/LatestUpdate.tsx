'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, MessageCircle, Star, User } from 'lucide-react';
import "flag-icons/css/flag-icons.min.css";

export default function LatestUpdate() {
const mock_data = [ 
  {
    id: 1,
    title: 'Jujutsu Kaisen',
    slug: '/manga/jujutsu-kaisen/vol1-ch34',
    image: '/mock/mock_toji.jpg',
    alt: 'Jujutsu Kaisen manga cover for Volume 1 Chapter 34',
    rating: 8.9,
    views: 999,
    comments: 999,
    volume: 'Vol 1 - Ch.34',
    country: 'th',
    author: 'John Doe',
    published: '1 hours ago',
  },
  {
    id: 2,
    title: 'Death Note',
    slug: '/manga/jujutsu-kaisen/vol1-ch34',
    image: '/mock/mock_dn.jpg',
    alt: 'lorem',
    rating: 9.1,
    views: 888,
    comments: 888,
    volume: 'Vol 1 - Ch.16',
    country: 'th',
    author: 'John Doe',
    published: '2 hours ago',
  },
  {
    id: 3,
    title: 'Hell Sing',
    slug: '/manga/jujutsu-kaisen/vol1-ch34',
    image: '/mock/mock_hs.jpg',
    alt: 'lorem',
    rating: 7.6,
    views: 91,
    comments: 24,
    volume: 'Vol 1 - Ch.2',
    country: 'th',
    author: 'John Doe',
    published: '2 hours ago',
  },
];

  return (
    <article className="mt-2 lg:mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {mock_data.map((update) => (
          <Link
            key={update.id}
            href={update.slug}
            className="flex gap-2 px-2 md:px-4 py-3 md:shadow-sm md:bg-slate-50 rounded-md cursor-pointer hover:bg-slate-100 transition-colors"
            aria-label={`Read ${update.title} manga update`}
            role="article"
          >
            {/* Image */}
            <div className="w-[100px] h-[140px] relative flex-shrink-0">
              <Image
                className="w-full h-full object-cover rounded-md"
                src={update.image}
                width={100}
                height={140}
                loading="lazy"
                alt={update.alt}
                placeholder="blur"
                blurDataURL="/placeholder.jpg"
              />
            </div>

            {/* Details */}
            <section className="flex flex-col justify-between flex-grow gap-1 min-w-0">
              <div className="flex flex-col gap-[4px]">
                {/* Title with truncation */}
                <h2
                  className="text-xl font-semibold truncate max-w-full"
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

                {/* Volume with truncation */}
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
  );
}