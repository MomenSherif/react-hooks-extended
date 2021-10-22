import { useCallback, useRef } from 'react';

import useMapState from '../use-map-state/use-map-state';

export interface UseMutationOptions<T, E> {
  onSuccess?(data: T): void;
  onError?(data: E): void;
}

export interface UseMutaion<E, K extends unknown[]> {
  mutate(...args: K): void;
  reset(): void;
  isLoading: boolean;
  isError: boolean;
  error: E | null;
}

export function useMutation<T, E, K extends unknown[]>(
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
          set('isLoading', false);
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
