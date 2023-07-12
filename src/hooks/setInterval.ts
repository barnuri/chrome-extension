import React from 'react';

export type UseInterval = (callback: Function, delay: number, running?: boolean) => void;
const useInterval: UseInterval = (callback, delay, running = true) => {
    const savedCallback: any = React.useRef();

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        if (running && delay !== null) {
            const id = setInterval(() => {
                const isDocumentVisible = document.visibilityState === 'visible';
                const isDocumentFocused = document.hasFocus();
                const isActive = isDocumentVisible && isDocumentFocused;
                if (isActive) {
                    savedCallback.current();
                }
            }, delay);
            return () => clearInterval(id);
        }
    }, [delay, running]);
};

export default useInterval;