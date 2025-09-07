import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { mockData } from '@/mock/mockData';
import { debounce } from 'lodash';
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { ChevronRight, Eye, MessageCircle, Star, User } from 'lucide-react';
import Image from 'next/image';

interface Props {
    isOpenSearchbar: boolean;
    onClose: () => void;
    onSearch: (query: string) => void;
}

// Mock interface
interface Manga {
  id: number;
  title: string;
  slug: string;
  image: string;
  alt: string;
  rating: number;
  views: number;
  comments: number;
  volume: string;
  country: string;
  author: string;
  published: string;
  status: string;
}

export default function SearchModal({ isOpenSearchbar, onClose, onSearch }: Props) {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<Manga[]>([])
    const inputRef = useRef<HTMLInputElement | null>(null);
    useBodyScrollLock(isOpenSearchbar);

    useEffect(() => {
        if (isOpenSearchbar && inputRef.current) {
            //  setTimeout 0 = wait for dom laoded
            setTimeout(() => {
                inputRef.current?.focus();
            }, 0);
        }
    }, [isOpenSearchbar]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        handleSearching(query);
        onSearch(query);
    }

    // Just mock data
    const handleSearching = useCallback(debounce((query:string) => {
        if (!query || query === '') return setSearchResult([]);
        
        const filterData = mockData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.author.toLowerCase().includes(query.toLowerCase()) ||
            item.volume.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResult(filterData);
        console.log(filterData);
    }, 500), [mockData, searchResult]);

    return ReactDOM.createPortal( 
        <>
            <div
                className={`fixed top-5 left-[50%] translate-x-[-50%] h-auto bg-white px-4 py-2 ${isOpenSearchbar ? 'pointer-events-auto z-[1000] w-[90%] md:w-[80%] lg:w-[50%]' : 'opacity-0 pointer-events-none z-[-1] w-0'} transition-pop rounded-md`}
            >
                <input 
                    ref={inputRef}
                    onChange={handleInputChange}
                    type="text" 
                    className='w-full h-full unset__input'
                    name="" 
                    id="" 
                    placeholder='Search ...'
                />
            </div>

            <div 
                className={`fixed top-[4.25rem] left-[50%] translate-x-[-50%] w-[90%] md:w-[80%] lg:w-[50%] bg-white px-4 py-2 ${isOpenSearchbar ? ' transition-pop-delay-400 opacity-100 pointer-events-auto z-[1000] h-auto' : 'opacity-0 pointer-events-none z-[-1] h-0'} rounded-md`}
            >
                <div className="flex flex-col gap-2 py-4 px-2 max-h-[80vh] overflow-hidden overflow-y-auto scrollbar__hidden__mobile" >
                    {searchQuery && (
                        <div className="flex justify-between">
                            <p className="text-xl font-bold">Manga</p>
                            <button
                                className='p-2 transition-colors hover:bg-slate-200 rounded-full'
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    )}
                    {searchResult && searchQuery != '' ? (
                        searchResult.length > 0 ? (
                            <ul className="flex flex-col gap-4" aria-live="polite">
                                {searchResult.map((data) => (
                                    <li key={data.id || data.title} className="flex gap-2 px-2 py-2 bg-gray-100 rounded-md cursor-pointer transition-colors hover:bg-slate-200">
                                        <div className="min-w-16 w-16 max-h-[75px] min-h-[75px] aspect-[4/6">
                                            <Image 
                                                className='w-full h-full object-cover'
                                                width={500}
                                                height={0}
                                                src={data.image}
                                                loading='lazy'
                                                alt={`Result image for : ${data.title}`}
                                            />
                                        </div>

                                        <div className="w-full flex flex-col justify-between">
                                            <div className="text-base md:text-lg max-w-[200px] md:max-w=[350px] lg:max-w-[700px] font-bold truncate">
                                                {data.title || 'No title'}
                                            </div>
                                            {/* Info */}
                                            <div className="flex flex-wrap items-center gap-4 text-xs">
                                                <div
                                                    className="rating text-[#ff7070] flex gap-1 items-center text-sm font-bold"
                                                    aria-label={`Rating: ${data.rating ?? 'N/A'}`}
                                                >
                                                    <Star size={18} strokeWidth={2.8} color="#ff7070" aria-hidden="true" />
                                                    <span>{data.rating ?? 'N/A'}</span>
                                                </div>
                                                <div
                                                    className="visited__count flex items-center gap-1"
                                                    aria-label={`Views: ${data.views ?? 0}`}
                                                >
                                                    <Eye size={18} aria-hidden="true" />
                                                    <span>{data.views ?? 0}</span>
                                                </div>
                                                <div
                                                    className="visited__count flex items-center gap-1"
                                                    aria-label={`Comments: ${data.comments ?? 0}`}
                                                >
                                                    <MessageCircle size={18} aria-hidden="true" />
                                                    <span>{data.comments ?? 0}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Status */}
                                            <div className="flex">
                                                <div className='bg-gray-200 px-2 py-1 text-xs rounded-md flex justify-center items-center gap-1font-medium'>
                                                    <div className={`w-3 aspect-square ${data.status == 'OnGoing' ? 'bg-green-400' : 'bg-cyan-400'} rounded-full`}></div>
                                                    <span>{data.status}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                             <p>No results found</p>
                        )
                    ) : (
                        <p>{searchQuery ? `Searching for : ${searchQuery}` : 'Enter a search query ...'}</p>
                    )}
                </div>
            </div>
        </>, document.body
    );
}   
