import { useEffect } from "react"

export const useBodyScrollLock = (isLock: boolean) => {
    useEffect(() => {   
        const preventTouchMove = (e: TouchEvent) => {
            if (isLock) e.preventDefault();
        };

        if (isLock) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
            document.body.style.width = '100%';
            document.addEventListener('touchmove', preventTouchMove, {
                passive: false,
            });
        } else {
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.width = '';
            document.removeEventListener('touchmove', preventTouchMove);
        }
        
        return () => {
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.width = '';
            document.removeEventListener('touchmove', preventTouchMove);
        }
    }, [isLock]);
}