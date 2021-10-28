import styled from '@emotion/styled';
import { useState } from 'react';

import {
  useCounter,
  useStepper,
  useTimeout,
  useInterval,
  useToggle,
  useDidMount,
  useDidUpdate,
  usePersistedState,
  useMapState,
  useArrayState,
  useDebounceEffect,
  useQuery,
  useMutation,
} from 'react-hooks-extended';

export function App() {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <h1 css={{ fontSize: 50, textAlign: 'center' }}>
        React Hooks Extended | Playground
      </h1>
      <div
        css={{
          marginTop: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button onClick={decrement}>Decrement</button>
        <span css={{ marginInline: 20 }}>{count}</span>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default App;
