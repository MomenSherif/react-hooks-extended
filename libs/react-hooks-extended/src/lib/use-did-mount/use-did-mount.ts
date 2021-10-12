import { useEffect, useRef, EffectCallback } from 'react';

/**
 * Calls a callback on mount
 * @param callback - Imperative function that can return a cleanup function
 */
export function useDidMount(callback: EffectCallback): void {
  const isMountedRef = useRef(false);

  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (isMountedRef.current) return;
    isMountedRef.current = true;
    const cleanUp = callbackRef.current();
    return cleanUp;
  }, []);
}

export default useDidMount;
