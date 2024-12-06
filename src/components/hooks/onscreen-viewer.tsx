// useOnScreen.ts
import { useState, useEffect, RefObject } from 'react';

function useOnScreen<T extends Element>(ref: RefObject<T>, rootMargin: string = "0px"): boolean {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            {
                rootMargin
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, rootMargin]);

    return isIntersecting;
}

export default useOnScreen;
