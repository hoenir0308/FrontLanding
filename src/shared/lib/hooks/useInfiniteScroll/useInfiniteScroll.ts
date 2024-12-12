import { useEffect } from 'react';

export interface UseInfiniteScrollProps {
    callback?: () => void;
    triggerRef: React.MutableRefObject<HTMLDivElement>;
    wrapperRef: React.MutableRefObject<HTMLDivElement>;
}

export function useInfiniteScroll(props: UseInfiniteScrollProps) {
    const { callback, triggerRef, wrapperRef } = props;

    useEffect(() => {
        let observer : IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    console.log('visible div');
                    callback();
                }
            }, options);

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                 
                observer.disconnect();
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
