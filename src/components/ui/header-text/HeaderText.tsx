import React from 'react'
import { ArrowRight } from "lucide-react";

interface Props {
    title: string;
}

export default function HeaderText({ title }: Props) {
  return (
    <header className="flex justify-between items-center">
        <h2 className="font-medium text-xl md:text-2xl">{ title }</h2>
        <button 
            className="p-2 rounded-full text-1xl transition-all duration-200 ease-in-out hover:bg-gray-200" 
            aria-label="View more updates"
        >
            <ArrowRight />
        </button>
    </header>
  )
}
