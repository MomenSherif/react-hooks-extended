import { useState, useCallback } from 'react';

export interface UseCounter {
  count: number;
  increment: () => void;
}

export function useCounter(): UseCounter {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(x => x + 1), []);
  return { count, increment };
}

export default useCounter;
