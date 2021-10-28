import { DependencyList, useEffect, useRef } from 'react';

import useMapState from '../use-map-state/use-map-state';
import useRetry from '../use-retry/use-retry';

export interface UseQueryOptions<T, ErrorType> {
  /**
   * Enable or disable the query
   * @default true
   */
  enabled?: boolean;
  /** Function to be called with the data after query success */
  onSuccess?(data: T): void;
  /** Function to be called with the error after query fail */
  onError?(error: ErrorType): void;
}

export interface UseQuery<T, ErrorType> {
  isLoading: boolean;
  isError: boolean;
  data: T | null;
  error: ErrorType | null;
  /** Refetch the query */
  refetch(): void;
}

/**
 *  Asynchronously fetch data
 * @param queryFn - Query function that returns a promise with resolved data
 * @param deps - List of dependencies that will cause query to rerun if changed
 * @param options - Query options
 * @default deps []
 */
export function useQuery<T, ErrorType = unknown>(
  queryFn: () => Promise<T>,
  deps: DependencyList = [],
  options: UseQueryOptions<T, ErrorType> = {}
): UseQuery<T, ErrorType> {
  const { enabled = true, onSuccess, onError } = options;

  const [state, { setMultiple, set }] = useMapState<{
    isLoading: boolean;
    isError: boolean;
    data: T | null;
    error: ErrorType | null;
  }>({
    isLoading: enabled,
    isError: false,
    data: null,
    error: null,
  });

  const [retry, doRetry] = useRetry();

  const queryFnRef = useRef(queryFn);
  queryFnRef.current = queryFn;

  const { isLoading } = state;
  useEffect(() => {
    if (!enabled) return;

    if (!isLoading) set('isLoading', true);

    queryFnRef
      .current()
      .then(data => {
        setMultiple({ data, isLoading: false, isError: false, error: null });
        onSuccess?.(data);
      })
      .catch(error => {
        setMultiple({ isLoading: false, isError: true, error });
        onError?.(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMultiple, retry, set, enabled, ...deps]);

  return {
    ...state,
    refetch: doRetry,
  };
}

export default useQuery;
