import { act, renderHook } from '@testing-library/react-hooks';
import useCounter from './use-counter';

describe('useCounter', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
