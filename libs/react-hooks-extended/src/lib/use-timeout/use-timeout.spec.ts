import { act, renderHook } from '@testing-library/react-hooks';
import useTimeout from './use-timeout';

describe('useTimeout', () => {
  it('Should work', () => {
    const { result } = renderHook(() =>
      useTimeout(() => console.log('Hello, World!'))
    );
  });
});
