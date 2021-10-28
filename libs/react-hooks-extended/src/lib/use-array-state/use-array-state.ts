import { useState, useCallback, Dispatch, SetStateAction } from 'react';

export interface UseArrayStateUpdaters<S> {
  /** Set new array state */
  set: Dispatch<SetStateAction<S[]>>;
  /** Adds one or more elements to the end of an array */
  push(...value: S[]): void;
  /** Adds one or more elements to the beginning  of an array */
  unshift(...value: S[]): void;
  /** Removes the last element from an array */
  pop(): void;
  /** Removes the first element from an array */
  shift(): void;
  /** Removes all elements that pass the test implemented by the predicate function */
  remove(predicate: (value: S, index: number, array: S[]) => boolean): void;
  /**
   * Update all elements that pass the test implemented by the predicate function.
   * @param predicate - Should return true for elements that need to be updated
   * @param updater - A function takes previous value & index for updated item and returns updated item
   */
  update(
    predicate: (value: S, index: number, array: S[]) => boolean,
    updater: (prevValue: S, index: number) => S
  ): void;
  /** Removes all array elements */
  removeAll(): void;
}

export type UseArrayState<S> = [S[], UseArrayStateUpdaters<S>];

/**
 * Manage state in array format.
 * @example TypeScript
 *  const [state, { push, unshift, pop, shift, remove, removeAll }] = useArrayState<Todo>([]);
 * @example JavaScript
 *  const [state, { push, unshift, pop, shift, remove, removeAll }] = useArrayState([]);
 * @returns Returns a stateful value and methods to update the array.
 */
export function useArrayState<S>(
  initialState: S[] | (() => S[])
): UseArrayState<S> {
  const [state, setState] = useState(() => {
    return initialState instanceof Function ? initialState() : initialState;
  });

  const push: UseArrayStateUpdaters<S>['push'] = useCallback((...values) => {
    setState(prevState => [...prevState, ...values]);
  }, []);

  const unshift: UseArrayStateUpdaters<S>['unshift'] = useCallback(
    (...values) => {
      setState(prevState => [...values, ...prevState]);
    },
    []
  );

  const pop: UseArrayStateUpdaters<S>['pop'] = useCallback(() => {
    setState(prevState => {
      if (!prevState.length) return prevState;
      return prevState.slice(0, prevState.length - 1);
    });
  }, []);

  const shift: UseArrayStateUpdaters<S>['shift'] = useCallback(() => {
    setState(prevState => {
      if (!prevState.length) return prevState;
      return prevState.slice(1);
    });
  }, []);

  const remove: UseArrayStateUpdaters<S>['remove'] = useCallback(predicate => {
    setState(prevState => {
      if (!prevState.length) return prevState;
      return prevState.filter((...args) => !predicate(...args));
    });
  }, []);

  const update: UseArrayStateUpdaters<S>['update'] = useCallback(
    (predicate, updater) => {
      setState(prevState =>
        prevState.map((v, i, a) => (predicate(v, i, a) ? updater(v, i) : v))
      );
    },
    []
  );

  const removeAll: UseArrayStateUpdaters<S>['removeAll'] = useCallback(() => {
    setState(prevState => {
      if (!prevState.length) return prevState;
      return [];
    });
  }, []);

  return [
    state,
    { set: setState, push, unshift, pop, shift, remove, update, removeAll },
  ];
}

export default useArrayState;
