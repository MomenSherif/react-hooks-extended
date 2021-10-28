import { useState, useCallback, SetStateAction } from 'react';

export interface UseMapStateUpdaters<S> {
  /**
   * Set a key value pair in map
   * @param key - Key
   * @param value - New value OR a function with prev value and returns new value
   */
  set<K extends keyof S>(key: K, value: SetStateAction<S[K]>): void;
  /** Remove a key value pair in map */
  remove(key: keyof S): void;
  /** If key exists in map */
  has(key: string): boolean;
  /** set multiple key value pair in map */
  setMultiple(value: Partial<S> | ((prevState: S) => Partial<S>)): void;
  /** Remove multiple key value pair in map */
  removeMultiple<K extends keyof S>(...keys: K[]): void;
  /** Remove all key value pair in map */
  removeAll(): void;
}

export type UseMapState<S> = [S, UseMapStateUpdaters<S>];

/**
 * Manage state in a key value pair map
 * @example TypeScript
 *  const [state, methods] = useMapState<{
      loading: boolean;
      data: string | null;
      error: string | null;
    }>({
 *    loading: true,
      data: null,
      error: null,
  })
 * @example JavaScript
 *  const [state, methods] = useMapState({
 *    loading: true,
      data: null,
      error: null,
  })
 * @returns Returns a stateful value and methods to update the map.
 */
export function useMapState<S extends Record<string, unknown>>(
  initialState: S | (() => S)
): UseMapState<S> {
  const [state, setState] = useState(initialState);

  const set: UseMapStateUpdaters<S>['set'] = useCallback((key, value) => {
    setState(prevState => ({
      ...prevState,
      [key]: value instanceof Function ? value(prevState[key]) : value,
    }));
  }, []);

  const remove: UseMapStateUpdaters<S>['remove'] = useCallback(key => {
    setState(prevState => {
      const { [key]: _, ...rest } = prevState;
      return rest as S;
    });
  }, []);

  const has: UseMapStateUpdaters<S>['has'] = useCallback(
    key => {
      return key in state;
    },
    [state]
  );

  const setMultiple: UseMapStateUpdaters<S>['setMultiple'] = useCallback(
    value => {
      setState(prevState => ({
        ...prevState,
        ...(value instanceof Function ? value(prevState) : value),
      }));
    },
    []
  );

  const removeMultiple: UseMapStateUpdaters<S>['removeMultiple'] = useCallback(
    (...keys) => {
      setState(prevState => {
        const updatedState = (Object.entries(prevState) as [any, any][])
          .filter(([key]) => !keys.includes(key))
          .reduce((acc: any, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {});

        return updatedState;
      });
    },
    []
  );

  const removeAll = useCallback(() => {
    setState({} as S);
  }, []);

  return [state, { set, remove, has, setMultiple, removeMultiple, removeAll }];
}

export default useMapState;
