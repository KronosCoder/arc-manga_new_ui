import { useEffect } from "react"

export const useBodyScrollLock = (isLock: boolean) => {
    useEffect(() => {   
        if (isLock) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }
    }, [isLock]);
}