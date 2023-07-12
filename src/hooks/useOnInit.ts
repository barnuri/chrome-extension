import { useEffect } from 'react';

export type UseOnInit = (callback: Function) => void;
const useOnInit: UseOnInit = (callback) => {
    useEffect(() => {
        callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useOnInit;