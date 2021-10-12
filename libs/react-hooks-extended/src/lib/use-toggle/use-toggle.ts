import { useState, useCallback, useRef } from 'react';

export type UseToggle<T> = [T, VoidFunction, (state: T) => void];

export type ToggleFunction<T> = (prevState: T) => T;

/**
 * Toggle between custom data
 * @param initialState
 * @param toggleFunction - custom toggle functionality
 * @returns Returns a stateful value, a function to toggle it and a function to force update the state to certain value.
 * @example TypeScript
 *  const [state, toggle, setState] = useToggle<'on' | 'off'>('off', s => s === 'on' ? 'off' : 'on');
 * @example JavaScript
 *  const [state, toggle, setState] = useToggle('off', s => s === 'on' ? 'off' : 'on');
 */
export function useToggle<T>(
  initialState: T,
  toggleFunction: (state: T) => T
): UseToggle<T>;
/**
 * Toggle between boolean values
 * @param initialState - initial value true | false
 * @returns Returns a stateful value, a function to toggle it and a function to force update the state to certain value.
 */
export function useToggle(initialState: boolean): UseToggle<boolean>;

/**
 * Toggle between boolean values
 * @default false
 * @returns Returns a stateful value, a function to toggle it and a function to force update the state to certain value.
 */
export function useToggle(): UseToggle<boolean>;

export function useToggle(
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
