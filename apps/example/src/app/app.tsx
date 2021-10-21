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
} from 'react-hooks-extended';

const Heading = styled.h1({ fontSize: 50, textAlign: 'center' });
const Button = styled.button({
  display: 'inline-block',
  border: 'none',
  backgroundColor: 'crimson',
  color: 'white',
  padding: '15px 20px',
  marginBottom: 10,
  fontSize: 20,
  borderRadius: 10,
  cursor: 'pointer',
  transition: 'transform 80ms ease-in-out, background-color 0.2s ease-in-out',

  ':not(:disabled):hover': {
    backgroundColor: '#ff0a38',
  },

  ':active': {
    transform: 'translateY(2px)',
  },

  ':disabled': {
    opacity: 0.8,
    cursor: 'not-allowed',
  },
});

export function App() {
  const [state, { set, remove, has, setMultiple, removeMultiple, removeAll }] =
    useMapState<{
      loading: boolean;
      data: string | null;
      error: string | null;
    }>({
      loading: true,
      data: null,
      error: null,
    });

  return (
    <div
      css={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Heading>Hello, react-hooks-extended!</Heading>
      <Button onClick={() => set('loading', v => !v)}>Click</Button>
      <Button onClick={() => remove('loading')}>Remove</Button>
      <Button
        onClick={() =>
          setMultiple({
            loading: false,
            data: '🐱‍👤',
          })
        }
      >
        Update Multiple
      </Button>
      <Button onClick={() => removeMultiple('error', 'loading')}>
        Remove Multiple
      </Button>
      <Button onClick={removeAll}>Remove All</Button>
      <h2>{String(state.loading)}</h2>
      <pre>
        <code>{JSON.stringify(state, null, 2)}</code>
      </pre>
    </div>
  );
}

export default App;
