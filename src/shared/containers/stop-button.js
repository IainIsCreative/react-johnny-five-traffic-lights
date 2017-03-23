// @flow

import { connect } from 'react-redux';

import { stopLight } from '../actions/traffic-lights';
import Button from '../components/button';

const mapStateToProps = state => ({
  label: 'Stop Sequence',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(stopLight()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
