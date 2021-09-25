import { act, renderHook } from '@testing-library/react-hooks';
import useRetry from './use-retry';

describe('useRetry', () => {
  it('Should work', () => {
    const { result } = renderHook(() => useRetry());
  });
});
