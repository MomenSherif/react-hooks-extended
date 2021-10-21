import { act, renderHook } from '@testing-library/react-hooks';
import useMapState from './use-map-state';

describe('useMapState', () => {
  it('Should Work', () => {
    const { result } = renderHook(() => useMapState({}));
  });
});
