// @flow

import { connect } from 'react-redux';

import { stopLight } from '../actions/traffic-lights';
import Button from '../components/button';

/**
 *
 * Stop Sequence Button
 *
 * This button triggers the stop sequence of the lights.
 *
 */

const mapStateToProps = () => ({
  label: 'Stop Sequence',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(stopLight()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
