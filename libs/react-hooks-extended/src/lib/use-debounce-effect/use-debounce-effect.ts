import { DependencyList, useEffect, useRef } from 'react';

export interface UseDebounceEffectOptions {
  enabled?: boolean;
  runOnMount?: boolean;
  wait?: number;
}

export function useDebounceEffect(
  callback: VoidFunction,
  deps: DependencyList,
  options: UseDebounceEffectOptions = {}
): void {
  const { enabled = true, wait = 1000, runOnMount = true } = options;

  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!runOnMount && !isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }

    if (!enabled) return;

    const timerId = setTimeout(callbackRef.current, wait);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useDebounceEffect;
