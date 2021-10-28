# React Hooks Extended 📦 [Docs](https://momensherif.github.io/react-hooks-extended/)

- `Don't use in production, you can copy paste any hook into your code.`
- `made only to try new tools & write more TS`
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/) ❤
  - [Nx](https://nx.dev/) `Monorepo tool`
  - [Docusaurus](https://docusaurus.io/) `Easy to create Docs ❤`
  - [Mdx](https://mdxjs.com/) 😲

## Installation

```shell
  npm i react-hooks-extended
```

```shell
  yarn add react-hooks-extended
```

## Basic usage

```jsx
function Example() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

## Clone ?

Run playground server on port: 3000

```shell
yarn start
```

Run documentation server on port: 3001

```shell
yarn docs
```

##[All Hooks are documented Here!](https://momensherif.github.io/react-hooks-extended/)

## More ?

There's alot of hooks can be done. try by yourself and you can find some tutorial online and codes you can learn from.

- [Web dev simplified | youtube](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH-aEDXnaFNLsqiJWFpIWV03)
- [useHooks](https://usehooks.com/)
- [usehooks-ts](https://usehooks-ts.com/)
- [rooks](https://react-hooks.org/)
