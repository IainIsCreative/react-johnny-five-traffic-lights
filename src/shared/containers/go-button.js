// @flow

import { connect } from 'react-redux';

import { goLight } from '../actions/traffic-lights';
import Button from '../components/button';

const mapStateToProps = state => ({
  label: 'Go Sequence',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(goLight()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
