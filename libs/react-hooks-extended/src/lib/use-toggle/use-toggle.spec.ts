import { act, renderHook } from '@testing-library/react-hooks';
import useToggle from './use-toggle';

describe('useToggle', () => {
  it('Should work boolean', () => {
    const { result } = renderHook(() => useToggle());
  });

  it('Should work custom toggle', () => {
    const { result } = renderHook(() =>
      useToggle<'on' | 'off'>('off', s => (s === 'on' ? 'off' : 'on'))
    );
  });
});
