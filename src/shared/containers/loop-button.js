// @flow

import { connect } from 'react-redux';

import { lightsLoop } from '../actions/traffic-lights';
import Button from '../components/button';

/**
 *
 * Loop Button
 *
 * This will trigger the lights to animate the 'Go' and 'Stop' sequence
 * continuously. This also acts as a toggle to stop the loop as well.
 *
 * This uses custom labelling depending on the lights state in our redux store.
 *
 */

const buttonLabel = (state) => {
  let label = 'Start Loop';

  if (state === 'Lights Loop Initiated.') {
    label = 'Stop Loop';
  }

  return label;
};

const mapStateToProps = state => ({
  label: buttonLabel(state.lights.get('trafficLights')),
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(lightsLoop()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
