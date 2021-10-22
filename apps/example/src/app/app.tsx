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
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const sleep = (ms: number) => new Promise((res, rej) => setTimeout(res, ms));

async function test(name: string): Promise<string> {
  console.log('start');
  await sleep(1000);
  console.log('end');
  return name;
}
export function App() {
  const { mutate, isLoading, isError, error, reset } = useMutation(
    (name: string) => test(name)
  );

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
      <Button disabled={isLoading} onClick={() => mutate('Momen')}>
        Delete
      </Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default App;
