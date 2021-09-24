import { act, renderHook } from '@testing-library/react-hooks';
import useStepper from './use-stepper';

describe('useStepper', () => {
  it('Should work', () => {
    const { result } = renderHook(() => useStepper([]));
  });
});
