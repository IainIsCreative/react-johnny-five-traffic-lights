// @flow

import React from 'react';
import TestButton from './containers/test-button';
import StopButton from './containers/stop-button';
import PulseButton from './containers/pulse';

const App = () => (
  <div className="traffic-lights-app">
    <TestButton />
    <StopButton />
    <PulseButton />
  </div>
);

export default App;
