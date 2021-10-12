import styled from '@emotion/styled';
import { useState } from 'react';

import {
  useCounter,
  useStepper,
  useTimeout,
  useToggle,
} from 'react-hooks-extended';

const Heading = styled.h1({ fontSize: 50, textAlign: 'center' });
const Button = styled.button({
  display: 'inline-block',
  border: 'none',
  backgroundColor: 'crimson',
  color: 'white',
  padding: '15px 20px',
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
  const [state, toggle, setState] = useToggle<'on' | 'off'>('off', s =>
    s === 'on' ? 'off' : 'on'
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
      <Button onClick={toggle}>Toggle </Button>
      <p>{state}</p>
      <div css={{ display: 'flex' }}>
        <Button css={{ marginRight: 10 }} onClick={() => setState('on')}>
          Force on
        </Button>
        <Button onClick={() => setState('off')}>Force off</Button>
      </div>
    </div>
  );
}

export default App;
