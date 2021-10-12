import { act, renderHook } from '@testing-library/react-hooks';
import useDidUpdate from './use-did-update';

describe('useDidUpdate', () => {
  it('Should work', () => {
    const { result } = renderHook(() =>
      useDidUpdate(() => console.log('Updated'))
    );
  });
});
