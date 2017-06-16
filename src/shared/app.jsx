// @flow

import React from 'react';
import MessageModal from './containers/message-modal';
import PulseButton from './containers/pulse-button';
import ToggleButton from './containers/toggle-button';
import StopButton from './containers/stop-button';
import GoButton from './containers/go-button';
import LoopButton from './containers/loop-button';

/**
 *
 * App Container
 *
 * This places all the necessary components in one single Component wrapper.
 *
 */
const App = () => (
  <div className="traffic-lights-app">
    <MessageModal />
    <ul className="light-buttons">
      <li>
        <ToggleButton />
      </li>
      <li>
        <PulseButton />
      </li>
      <li>
        <GoButton />
      </li>
      <li>
        <StopButton />
      </li>
      <li>
        <LoopButton />
      </li>
    </ul>
  </div>
);

export default App;
