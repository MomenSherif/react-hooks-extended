import { Global } from '@emotion/react';

export default function GlobalStyles() {
  return (
    <Global
      styles={{
        body: { margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' },
        html: { boxSizing: 'border-box' },
        '*': {
          boxSizing: 'inherit',
        },
      }}
    />
  );
}
