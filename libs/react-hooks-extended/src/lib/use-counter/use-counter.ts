import { useState, useCallback } from 'react';
import clamp from '../../utils/clamp';

export type InitialCount = number | (() => number);
export interface UseCounterOptions {
  /**
   * Minimum counter value
   * @default Number.MIN_SAFE_INTEGER
   */
  min?: number;
  /**
   * Maximum counter value
   * @default Number.MAX_SAFE_INTEGER
   */
  max?: number;
  /**
   * Counter increment step
   * @default 1
   */
  step?: number;
}

export interface UseCounter {
  /**
   * Current count
   */
  count: number;
  /**
   * Increment by one step
   * @default step 1
   */
  increment(): void;
  /**
   * Decrement by one step
   * @default step 1
   */
  decrement(): void;
  /**
   * Increment with specific number
   */
  incrementBy(value: number): void;
  /**
   * Decrement with specific number
   */
  decrementBy(value: number): void;
  /**
   * Set counter to certain value
   */
  set(value: number): void;
  /**
   * Reset counter to initial value
   */
  reset(): void;
}

/**
 * @param initialCount - initial counter
 * @param options - counter options
 * @default initialCount 0
 */
export function useCounter(
  initialCount: InitialCount = 0,
  options: UseCounterOptions = {}
): UseCounter {
  const {
    step = 1,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
  } = options;

  const [count, setCount] = useState(() => {
    const initialValue =
      typeof initialCount === 'function' ? initialCount() : initialCount;
    return clamp(initialValue, min, max);
  });

  const increment = useCallback(
    () => setCount(c => Math.min(c + step, max)),
    [max, step]
  );

  const decrement = useCallback(
    () => setCount(c => Math.max(c - step, min)),
    [min, step]
  );

  const incrementBy = useCallback(
    (value: number) => setCount(c => Math.min(c + value, max)),
    [max]
  );

  const decrementBy = useCallback(
    (value: number) => setCount(c => Math.max(c - value, min)),
    [min]
  );

  const set = useCallback(
    (value: number) => setCount(clamp(value, min, max)),
    [max, min]
  );

  const reset = useCallback(() => setCount(initialCount), [initialCount]);

  return {
    count,
    increment,
    decrement,
    incrementBy,
    decrementBy,
    set,
    reset,
  };
}

export default useCounter;
