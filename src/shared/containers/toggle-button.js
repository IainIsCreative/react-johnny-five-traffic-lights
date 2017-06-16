// @flow

import { connect } from 'react-redux';

import { lightsToggle } from '../actions/traffic-lights';
import Button from '../components/button';

/**
 *
 * Light toggle button
 *
 * This simply toggles all the lights on or off.
 *
 * This uses custom labelling depending on the lights state in our redux store.
 *
 */
const buttonLabel = (state) => {
  let label = 'Switch On';

  if (state === 'Lights are on.') {
    label = 'Switch Off';
  }

  return label;
};

const mapStateToProps = state => ({
  label: buttonLabel(state.lights.get('trafficLights')),
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(lightsToggle()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
