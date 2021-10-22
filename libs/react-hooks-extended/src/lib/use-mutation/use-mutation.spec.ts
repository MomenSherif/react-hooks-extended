import { act, renderHook } from '@testing-library/react-hooks';
import useMutation from './use-mutation';

describe('useMutation', () => {
  it('Should Work', () => {
    const { result } = renderHook(() =>
      useMutation(() => Promise.resolve('useMutation'))
    );
  });
});
