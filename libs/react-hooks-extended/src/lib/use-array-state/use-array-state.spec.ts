import { act, renderHook } from '@testing-library/react-hooks';
import useArrayState from './use-array-state';

describe('useArrayState', () => {
  it('Should Work', () => {
    const { result } = renderHook(() => useArrayState());
  });
});
