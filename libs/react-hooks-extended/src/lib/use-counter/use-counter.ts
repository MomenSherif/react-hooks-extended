import { useState, useCallback } from 'react';

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
  count: number;
  increment(): void;
  decrement(): void;
  incrementBy(value: number): void;
  decrementBy(value: number): void;
  set(value: number): void;
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

  const [count, setCount] = useState(initialCount);

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
    (value: number) => setCount(value > max ? max : value < min ? min : value),
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
