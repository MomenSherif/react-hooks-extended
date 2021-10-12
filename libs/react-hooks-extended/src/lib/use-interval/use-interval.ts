import { useEffect, useRef } from 'react';

export interface UseIntervalOptions {
  /**
   * Enable or disable the interval
   * @default true
   */
  enabled?: boolean;
}

/**
 *
 * @param callback - A function to be executed every delay milliseconds. The first execution happens after delay milliseconds.
 * @param delay - The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function.
 * @param options - Interval options
 */
export function useInterval(
  callback: VoidFunction,
  delay = 0,
  options: UseIntervalOptions = {}
): void {
  const { enabled = true } = options;

  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (!enabled) return;

    const timerId = setInterval(callbackRef.current, delay);

    return () => {
      clearInterval(timerId);
    };
  }, [delay, enabled]);
}

export default useInterval;
