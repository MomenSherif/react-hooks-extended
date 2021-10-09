import { useState, useCallback, useRef } from 'react';

export type UseToggle<T> = [T, VoidFunction, (state: T) => void];

export type ToggleFunction<T> = (prevState: T) => T;

function useToggle<T>(
  initialState: T,
  toggleFunction: (state: T) => T
): UseToggle<T>;
function useToggle(initialState: boolean): UseToggle<boolean>;
function useToggle(): UseToggle<boolean>;
function useToggle(
  initialState: any = false,
  toggleFunction: (state: any) => any = v => !v
): UseToggle<any> {
  const [state, setState] = useState(initialState);

  const toggleFunctionRef = useRef(toggleFunction);
  toggleFunctionRef.current = toggleFunction;

  const toggle = useCallback(() => {
    setState(toggleFunctionRef.current);
  }, []);

  return [state, toggle, setState];
}

export default useToggle;
