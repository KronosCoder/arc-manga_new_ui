'use client';

import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { createContext } from 'react';

interface SidebarContextType {
    isExpanded: boolean;
    isMobileExpanded: boolean;

    openSidebar: () => void;
    closeSidebar: () => void;

    openMobileSidebar: () => void;
    closeMobileSidebar: () => void;

    toggleSidebar: () => void;
    toggleMobileSidebar: () => void;
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
    const [isMobileExpanded, setMobileIsExpanded] = useState<boolean>(false);

    useEffect(() => {
        if (isMobileExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileExpanded]);

    const toggleSidebar = () => {
        setIsExpanded((prev) => !prev);
    }

    const openSidebar = () => {
        setIsExpanded(true);
    }

    const closeSidebar = () => {
        setIsExpanded(false);
    }
    
    const toggleMobileSidebar = () => {
        setMobileIsExpanded((prev) => { 
            console.log(`Previous: ${prev} / Newest: ${!prev}`);
            return !prev;
        });
    }
    
    const openMobileSidebar = () => {
        setMobileIsExpanded(true);
    }

    const closeMobileSidebar = () => {
        setMobileIsExpanded(false);
    }

    return (
        <SidebarContext.Provider value={{ isExpanded, openSidebar, closeSidebar, toggleSidebar, isMobileExpanded, openMobileSidebar, closeMobileSidebar, toggleMobileSidebar }}>
            { children }
        </SidebarContext.Provider>
    )
}
