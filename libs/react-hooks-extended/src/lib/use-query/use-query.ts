import { DependencyList, useCallback, useEffect, useRef } from 'react';

import useMapState from '../use-map-state/use-map-state';
import useRetry from '../use-retry/use-retry';

export interface UseQueryOptions<T, ErrorType> {
  enabled?: boolean;
  onSuccess?(data: T): void;
  onError?(error: ErrorType): void;
}

export interface UseQuery<T, ErrorType> {
  isLoading: boolean;
  isError: boolean;
  data: T | null;
  error: ErrorType | null;
  refetch(): void;
}

export function useQuery<T, ErrorType = string>(
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
    isLoading: true,
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
