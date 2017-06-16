// @flow

import { connect } from 'react-redux';

import { goLight } from '../actions/traffic-lights';
import Button from '../components/button';

/**
 *
 * Go Sequence Button
 *
 * This button triggers the go button sequence of the lights.
 *
 */

const mapStateToProps = () => ({
  label: 'Go Sequence',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(goLight()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
