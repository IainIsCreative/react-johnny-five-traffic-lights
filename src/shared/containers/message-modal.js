// @flow

import { connect } from 'react-redux';

import Message from '../components/message';

const mapStateToProps = state => ({
  message: state.lights.get('trafficLights'),
});

export default connect(mapStateToProps)(Message);
