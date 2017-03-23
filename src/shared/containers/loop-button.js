// @flow

import { connect } from 'react-redux';

import { lightsLoop } from '../actions/traffic-lights';
import Button from '../components/button';

const buttonLabel = (state) => {
  let label = 'Start Loop';

  if(state == 'Lights Loop Initiated.') {
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
