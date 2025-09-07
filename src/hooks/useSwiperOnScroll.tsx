import { useEffect } from "react";
import SwiperCore from 'swiper';


interface UseSwiperOnScrollProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
    swiperRef: React.RefObject<SwiperCore | null>;
}

export const useSwiperOnScroll = ({containerRef, swiperRef}: UseSwiperOnScrollProps) => {
    useEffect(() => {
        if (!containerRef.current) return;

        const handleWheel = (e: WheelEvent) => {
            if (!swiperRef.current) return;

            e.preventDefault();
            e.stopPropagation();

            if (e.deltaY > 0) swiperRef.current.slideNext();
            else swiperRef.current.slidePrev();
        }

        containerRef.current.addEventListener('wheel', handleWheel);
        return () => {
            containerRef.current?.removeEventListener('wheel', handleWheel);
        }
    }, [containerRef, swiperRef]);
}