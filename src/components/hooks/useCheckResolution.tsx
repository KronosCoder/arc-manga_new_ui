import { type } from "os";
import { useEffect, useState } from "react";


export const useCheckResolution = (breakpoint: number)   => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkResolution = () => {
                setIsMobile(window.innerWidth < breakpoint);
            }
            checkResolution();

            window.addEventListener('resize', checkResolution);

            return () => window.removeEventListener('resize', checkResolution);
        }
    }, [breakpoint]);

    return isMobile;
}