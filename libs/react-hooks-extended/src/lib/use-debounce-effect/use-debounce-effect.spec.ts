import { act, renderHook } from '@testing-library/react-hooks';
import useDebounceEffect from './use-debounce-effect';

describe('useDebounceEffect', () => {
  it('Should Work', () => {
    const { result } = renderHook(() =>
      useDebounceEffect(() => console.log('useDebounceEffect'), [])
    );
  });
});
