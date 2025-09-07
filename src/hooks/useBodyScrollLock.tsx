import { useEffect } from "react"

export const useBodyScrollLock = (isLock: boolean) => {
    useEffect(() => {   
        if (isLock) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isLock]);
}