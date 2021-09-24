import useCounter from '../use-counter/use-counter';

export interface UseStepperOptions {
  initialStep?: number;
}

export interface UseStepper<T> {
  currentStep: T;
  currentIndex: number;
  next(): void;
  prev(): void;
  goto(step: number): void;
  reset(): void;
  canNext: boolean;
  canPrev: boolean;
}

export function useStepper<T>(
  steps: T[],
  options: UseStepperOptions = {}
): UseStepper<T> {
  const { initialStep = 0 } = options;

  const { count, increment, decrement, reset, set } = useCounter(initialStep, {
    min: 0,
    max: steps.length - 1,
  });

  return {
    currentStep: steps[count],
    currentIndex: count,
    next: increment,
    prev: decrement,
    goto: set,
    reset,
    canPrev: count > 0,
    canNext: count < steps.length - 1,
  };
}

export default useStepper;
