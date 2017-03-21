// @flow

import { connect } from 'react-redux';

import { stopLight } from '../actions/traffic-lights';
import Button from '../components/button';

const mapStateToProps = () => ({
  label: 'Stop Me',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(stopLight()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
