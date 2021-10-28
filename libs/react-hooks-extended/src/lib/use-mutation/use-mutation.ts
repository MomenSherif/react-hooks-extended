import { useCallback, useRef } from 'react';

import useMapState from '../use-map-state/use-map-state';

export interface UseMutationOptions<T, E> {
  /** Function to be called with the data after mutation success */
  onSuccess?(data: T): void;
  /** Function to be called with the error after mutation fail */
  onError?(data: E): void;
}

export interface UseMutaion<E, K extends unknown[]> {
  /** Mutate function to be called to trigger the mutation */
  mutate(...args: K): void;
  /** Reset internal state */
  reset(): void;
  isLoading: boolean;
  isError: boolean;
  error: E | null;
}

/**
 * Mutate data with loading & error states indicators.
 * @param mutationFn - Mutation function that returns a promise
 * @param options - Mutation options
 * @returns
 */
export function useMutation<T, E = unknown, K extends unknown[] = []>(
  mutationFn: (...args: K) => Promise<T>,
  options: UseMutationOptions<T, E> = {}
): UseMutaion<E, K> {
  const { onSuccess, onError } = options;

  const [state, { set, setMultiple }] = useMapState<{
    isLoading: boolean;
    isError: boolean;
    error: E | null;
  }>({
    isLoading: false,
    isError: false,
    error: null,
  });

  const mutationFnRef = useRef(mutationFn);
  mutationFnRef.current = mutationFn;

  const onSuccessRef = useRef(onSuccess);
  onSuccessRef.current = onSuccess;

  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  const mutate: UseMutaion<E, K>['mutate'] = useCallback(
    (...args) => {
      set('isLoading', true);

      mutationFnRef
        .current(...args)
        .then(data => {
          setMultiple({ isLoading: false, isError: false, error: null });
          onSuccessRef.current?.(data);
        })
        .catch((error: E) => {
          setMultiple({ isLoading: false, isError: true, error });
          onErrorRef.current?.(error);
        });
    },
    [set, setMultiple]
  );

  const reset: UseMutaion<E, K>['reset'] = useCallback(() => {
    setMultiple({
      isLoading: false,
      isError: false,
      error: null,
    });
  }, [setMultiple]);

  return {
    ...state,
    mutate,
    reset,
  };
}

export default useMutation;
