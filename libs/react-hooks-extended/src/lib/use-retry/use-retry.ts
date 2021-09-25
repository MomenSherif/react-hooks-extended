import { useReducer } from 'react';

export function useRetry() {
  return useReducer(state => !state, false);
}

export default useRetry;
