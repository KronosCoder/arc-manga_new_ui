'use client';

import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash'; 

export const useIsMobile = (breakpoint: number) => {
    const [isMobile, setIsMobile] = useState<boolean>(typeof window !== 'undefined' ? window.innerWidth < breakpoint : false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkResolution = debounce(() => {
                setIsMobile(window.innerWidth < breakpoint);
            }, 200);
            checkResolution();

            window.addEventListener('resize', checkResolution);
            return () => window.addEventListener('resize', checkResolution);
        }
    }, [breakpoint]);

    return isMobile;
}