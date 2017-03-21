// @flow

import * as Immutable from 'immutable';

import { TEST_LIGHT, STOP_LIGHT, PULSE_LIGHT } from '../actions/traffic-lights';

const initialState = Immutable.fromJS({
  testLight: false,
});

const trafficLightReducer = (state: Object = initialState, action: { type: String, payload: any }) => {
  switch(action.type) {
    case TEST_LIGHT:
      return state.set('testLight', action.payload);
    case STOP_LIGHT:
      return state.set('testLight', action.payload);
    case PULSE_LIGHT:
      return state.set('testLight', action.payload);
    default:
      return state;
  }
};

export default trafficLightReducer;
