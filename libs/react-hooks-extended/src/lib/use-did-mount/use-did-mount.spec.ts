import { act, renderHook } from '@testing-library/react-hooks';
import useDidMount from './use-did-mount';

describe('useDidMount', () => {
  it('Should work', () => {
    const { result } = renderHook(() =>
      useDidMount(() => console.log('Mounted'))
    );
  });
});
