// @flow

import { connect } from 'react-redux';

import { pulseLight } from '../actions/traffic-lights';
import Button from '../components/button';

const mapStateToProps = () => ({
  label: 'Pulse',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(pulseLight()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
