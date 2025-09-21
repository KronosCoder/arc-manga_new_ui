"use client";

import React, { useState } from 'react';
import './FilterDropdown.css';
import { ChevronDown } from 'lucide-react';

export default function FilterDropdown() {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const defaultItems = [
        { key: 'newest', label: 'Newest First' },
        { key: 'oldest', label: 'Oldest First' },
    ];

    return (
        <div className="dropdown__wrapper relative">
            <label htmlFor="filter-dropdown" className="sr-only">
                Filter Options
            </label>
            <select
                id="filter-dropdown"
                name="filter"
                className="filter__dropdown pl-4 pr-10 py-2 bg-gray-50 rounded-md cursor-pointer appearance-none text-center"
                onClick={() => setIsFocus((prev) => !prev)}
                onBlur={() => setIsFocus(false)}

            >
                {defaultItems.map((data) => (
                <option key={data.key} value={data.key}>
                    {data.label}
                </option>
                ))}
            </select>
            <span
                className={`absolute right-2 top-[50%] translate-y-[-50%] pointer-events-none transition-pop duration-300 ease-in-out ${isFocus ? 'rotate-180' : 'rotate-0'}`}
                aria-hidden="true"
            >
                <ChevronDown className="dropdown__arrow" />
            </span>
        </div>
    );
}