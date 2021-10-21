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

interface Todo {
  id: number;
  text: string;
}

export function App() {
  const [state, { push, unshift, pop, shift, remove, removeAll }] =
    useArrayState<Todo>([]);

  useDidMount(() => {
    push({ id: 1, text: 'one' }, { id: 1, text: 'two' });
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
      <Button
        onClick={() =>
          push({ id: Date.now(), text: `Todo ${state.length + 1}` })
        }
      >
        Add TODO
      </Button>
      <Button
        onClick={() =>
          unshift({ id: Date.now(), text: `Todo ${state.length + 1}` })
        }
      >
        Unshift TODO
      </Button>
      <Button onClick={pop}>Pop</Button>
      <Button onClick={shift}>Shift</Button>
      <Button onClick={removeAll}>Remove all</Button>
      <Button onClick={() => remove((todo, i) => i === 1)}>Remove 2</Button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
