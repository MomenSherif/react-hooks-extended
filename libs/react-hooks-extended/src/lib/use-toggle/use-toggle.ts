import { useState, useCallback, useRef } from 'react';

export type UseToggle<T> = [T, VoidFunction, (state: T) => void];

export type ToggleFunction<T> = (prevState: T) => T;

// TODO: Fix types
function useToggle<T = boolean>(
  initialState: T | boolean = false,
  toggleFunction: ToggleFunction<T | boolean> = v => !v
): UseToggle<T | boolean> {
  const [state, setState] = useState(initialState);

  const toggleFunctionRef = useRef(toggleFunction);
  toggleFunctionRef.current = toggleFunction;

  const toggle = useCallback(() => {
    setState(toggleFunctionRef.current);
  }, []);

  return [state, toggle, setState];
}

export default useToggle;
