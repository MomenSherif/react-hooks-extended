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
export function App() {
  const { count: id, increment } = useCounter(1);
  const { data, isLoading, isError, error, refetch } = useQuery<Post, Error>(
    () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
        if (!res.ok) throw new Error('Something went wrong!');
        return res.json();
      }),
    [id]
  );

  if (isLoading) return <div>Loaaaaaaaaaaaading....</div>;
  if (isError)
    return (
      <div>
        {error?.message}
        <Button onClick={refetch}>Retry</Button>
      </div>
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
      <Button onClick={increment}>Fetch next</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
