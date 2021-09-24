import styled from '@emotion/styled';

import { useCounter, useStepper } from 'react-hooks-extended';

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

const Todo = styled.article({
  maxWidth: 600,
  marginTop: 20,
  padding: 20,
  borderRadius: 20,
  backgroundColor: '#ffa4b559',
  color: 'crimson',
  h2: {
    marginBlock: '0 10px',
  },
  p: {
    margin: 0,
    lineHeight: 1.4,
  },
});

const todos = [
  {
    id: 1,
    title: 'Central Optimization Specialist',
    body: 'Alias quia explicabo dolorum. Id dolore et dignissimos omnis labore alias repudiandae est at. Adipisci odio ipsum. Natus repellendus assumenda. Sunt veritatis qui.\n \rEst non voluptatem quia vero aut ut id. Quia rerum non veniam illum sequi magni eveniet nulla et. Aut in et dolore tempora distinctio sed doloremque ea voluptas. Velit blanditiis asperiores sint sit nobis iusto tenetur molestiae voluptatibus.\n \rAdipisci et dolores corrupti sequi explicabo. Nemo dolor laboriosam adipisci fuga sed. Et deserunt ipsa iusto nulla voluptate assumenda.',
  },
  {
    id: 2,
    title: 'Dynamic Assurance Agent',
    body: 'impedit',
  },
  {
    id: 3,
    title: 'Forward Interactions Architect',
    body: 'odio',
  },
  {
    id: 4,
    title: 'Lead Program Developer',
    body: 'Rem ducimus sunt illum necessitatibus eligendi placeat quaerat non. Laboriosam voluptatem dolorum reiciendis.',
  },
  {
    id: 5,
    title: 'Corporate Marketing Liaison',
    body: 'Nisi consequatur dolorem laboriosam architecto repellendus tempora omnis.',
  },
  {
    id: 6,
    title: 'Lead Tactics Assistant',
    body: 'Nostrum quos eos.\nIste sed error facilis nulla enim assumenda est.\nConsequuntur minima nihil eos error mollitia aut ea.\nUt eaque ut fugit ad rerum sed.',
  },
  {
    id: 7,
    title: 'National Brand Director',
    body: 'voluptatibus',
  },
  {
    id: 8,
    title: 'Forward Program Orchestrator',
    body: 'consequuntur et iusto',
  },
  {
    id: 9,
    title: 'Corporate Research Producer',
    body: 'Fugit in molestias aut enim commodi quae et. Quia id minus minus accusamus nam. Sunt maiores vel alias nam velit eos est quaerat. Dolorem hic nemo quia et commodi accusamus.',
  },
  {
    id: 10,
    title: 'Internal Group Engineer',
    body: 'Sit enim excepturi voluptas.',
  },
];

export function App() {
  const {
    currentStep: todo,
    currentIndex,
    canNext,
    canPrev,
    next,
    prev,
    reset,
    goto,
  } = useStepper(todos);

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
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <Button css={{ marginRight: 10 }} disabled={!canPrev} onClick={prev}>
          Prev
        </Button>
        <span>Step {currentIndex}</span>
        <Button css={{ marginLeft: 10 }} disabled={!canNext} onClick={next}>
          Next
        </Button>
      </div>
      <Todo>
        <h2>{todo.title}</h2>
        <p>{todo.body}</p>
      </Todo>
    </div>
  );
}

export default App;
