// @flow

import { connect } from 'react-redux';

import { pulseLight } from '../actions/traffic-lights';
import Button from '../components/button';

const buttonLabel = (state) => {
  let label = 'Start Pulse';

  if(state == 'Lights are pulsing.') {
    label = 'Stop Pulse';
  }

  return label;
};


const mapStateToProps = state => ({
  label: buttonLabel(state.lights.get('trafficLights')),
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(pulseLight()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
