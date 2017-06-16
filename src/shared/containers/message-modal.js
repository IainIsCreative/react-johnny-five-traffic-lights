// @flow

import { connect } from 'react-redux';

import Message from '../components/message';

/**
 *
 * Message Modal
 *
 * Depending on the state of our lights in our Redux Store, the message modal
 * will update the text to notify what our robot is doing.
 *
 */

const mapStateToProps = state => ({
  message: state.lights.get('trafficLights'),
});

export default connect(mapStateToProps)(Message);
