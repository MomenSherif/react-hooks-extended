import { act, renderHook } from '@testing-library/react-hooks';
import useInterval from './use-interval';

describe('useInterval', () => {
  it('Should Work', () => {
    const { result } = renderHook(() =>
      useInterval(() => console.log('useInterval'))
    );
  });
});
