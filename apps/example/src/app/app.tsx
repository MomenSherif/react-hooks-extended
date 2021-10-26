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

export function App() {
  const [count, setCount] = useState(0);

  useInterval(() => setCount(c => c + 1), 1000);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

export default App;
