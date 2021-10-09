import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from './use-toggle';

describe('useToggle', () => {
  it.skip('Should work boolean', () => {
    const { result } = renderHook(() => useToggle());
  });
  it.skip('Should work boolean with default value', () => {
    const { result } = renderHook(() => useToggle(true));
  });
  it.skip('Should work custom toggle', () => {
    const { result } = renderHook(() =>
      useToggle<'on' | 'off'>('off', s => (s === 'on' ? 'off' : 'on'))
    );
  });
});
