'use client';

import React, { ReactNode, useContext, useState } from 'react';
import { createContext } from 'react';

interface SidebarContextType {
    isExpanded: boolean;
    toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

export const useSidebarContext = () => {
    const context = useContext(SidebarContext);
    if (!context) throw new Error(`useSidebarContext must be use within SidebarProvider !`);
    return context;

}

interface Props {
    children: ReactNode;
}

export default function SidebarProvider({ children }: Props) {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    }


    return (
        <SidebarContext.Provider value={{ isExpanded, toggleSidebar }}>
            { children }
        </SidebarContext.Provider>
    )
}
