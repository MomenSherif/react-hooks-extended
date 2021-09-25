import { useEffect, useRef, useState } from 'react';
import useRetry from '../use-retry/use-retry';

type Callback = () => void;
type Delay = number | Date;

export interface UseTimeout {
  /**
   * Restart the timer
   */
  restart(): void;
}

/**
 *
 * @param callback - A function to be executed after the timer expires
 * @param delay - The time in 'milliseconds' or 'Date' in the future that the timer should wait
 * @default delay 0
 */
export function useTimeout(callback: Callback, delay: Delay = 0): UseTimeout {
  const [retry, doRetry] = useRetry();

  const callbackRef = useRef(callback);

  useEffect(() => {
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
  }, [delay, retry]);

  return {
    restart: doRetry,
  };
}

export default useTimeout;
