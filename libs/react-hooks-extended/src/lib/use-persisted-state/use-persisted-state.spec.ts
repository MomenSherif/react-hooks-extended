import { act, renderHook } from '@testing-library/react-hooks';
import usePersistedState from './use-persisted-state';

describe('usePersistedState', () => {
  it('Should Work', () => {
    const { result } = renderHook(() => usePersistedState('name'));
  });
});
