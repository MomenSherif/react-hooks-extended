import { act, renderHook } from '@testing-library/react-hooks';
import useCounter from './use-counter';

describe('useCounter', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCounter(0, { step: 2 }));
    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });
});
