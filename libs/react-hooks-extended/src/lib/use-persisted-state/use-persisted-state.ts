import {
  useState,
  useCallback,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import tryCatch from '../../utils/try-catch';

export type UsePersistedState<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  VoidFunction
];

/**
 * @param key - Local storage item key
 * @param initialState
 * @returns Returns a stateful value, a function to update it. and a function to remove the item from local storage.
 */
export function usePersistedState<S>(
  key: string,
  initialState?: S
): UsePersistedState<S> {
  const [state, setState] = useState<S>(() => {
    const persistedState = localStorage.getItem(key);

    if (!persistedState)
      return typeof initialState === 'function' ? initialState() : initialState;

    return tryCatch<S>(
      () => JSON.parse(persistedState),
      () => (typeof initialState === 'function' ? initialState() : initialState)
    );
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  const remove = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return [state, setState, remove];
}

export default usePersistedState;
