import React from 'react';
import * as reactHooksExtended from '../../../../../libs/react-hooks-extended/src'

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...reactHooksExtended
};

export default ReactLiveScope;
