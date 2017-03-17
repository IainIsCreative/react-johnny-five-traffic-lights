// @flow

import { connect } from 'react-redux';

import { testLight } from '../actions/traffic-lights';
import Button from '../components/button';

const mapStateToProps = () => ({
  label: 'Test Me',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(testLight()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
