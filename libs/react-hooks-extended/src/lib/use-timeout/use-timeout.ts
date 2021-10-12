import { useEffect, useRef } from 'react';
import useRetry from '../use-retry/use-retry';

export interface UseTimeoutOptions {
  /**
   * Enable or disable the timeout
   * @default true
   */
  enabled?: boolean;
}
export interface UseTimeout {
  /** Restart the timer */
  restart(): void;
}
/**
 *
 * @param callback - A function to be executed after the timer expires
 * @param delay - The time in 'milliseconds' or 'Date' in the future that the timer should wait
 * @default delay 0
 */
export function useTimeout(
  callback: VoidFunction,
  delay: number | Date = 0,
  options: UseTimeoutOptions = {}
): UseTimeout {
  const { enabled = true } = options;
  const [retry, doRetry] = useRetry();

  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (!enabled) return;

    const timeLeft =
      typeof delay === 'number'
        ? delay
        : delay.getTime() - new Date().getTime();

    const timerId = setTimeout(() => {
      callbackRef.current();
    }, timeLeft);

    return () => {
      clearTimeout(timerId);
    };
  }, [delay, enabled, retry]);

  return {
    restart: doRetry,
  };
}

export default useTimeout;
