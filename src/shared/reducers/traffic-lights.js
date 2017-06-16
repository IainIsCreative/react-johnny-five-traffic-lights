// @flow

import * as Immutable from 'immutable';

import {
  LIGHTS_ON,
  LIGHTS_OFF,
  PULSE_LIGHT,
  GO_LIGHT,
  STOP_LIGHT,
  LIGHTS_LOOP,
  STOP_LOOP,
} from '../actions/traffic-lights';

/**
 *
 * Set the initial state of our app
 *
 */
const initialState = Immutable.fromJS({
  trafficLights: 'Robot is ready.',
});

/**
 *
 * The Traffic Light Reducer
 *
 * Depending on what actions take place, this will update the state of our app
 * using the payload in that action.
 * This is mostly used for the UI, but can be extended to use on our robot
 * as well.
 *
 */
const trafficLightReducer = (state: Object = initialState, action: {
  type: String, payload: any
}) => {
  switch (action.type) {
    case LIGHTS_ON:
      return state.set('trafficLights', action.payload);
    case LIGHTS_OFF:
      return state.set('trafficLights', action.payload);
    case PULSE_LIGHT:
      return state.set('trafficLights', action.payload);
    case GO_LIGHT:
      return state.set('trafficLights', action.payload);
    case STOP_LIGHT:
      return state.set('trafficLights', action.payload);
    case LIGHTS_LOOP:
      return state.set('trafficLights', action.payload);
    case STOP_LOOP:
      return state.set('trafficLights', action.payload);
    default:
      return state;
  }
};

export default trafficLightReducer;
