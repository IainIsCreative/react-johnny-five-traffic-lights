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

const initialState = Immutable.fromJS({
  trafficLights: 'Robot is ready.',
});

const trafficLightReducer = (state: Object = initialState, action: { type: String, payload: any }) => {
  switch(action.type) {
    case LIGHTS_ON:
      return state.set('trafficLights', 'Lights are on.');
    case LIGHTS_OFF:
      return state.set('trafficLights', 'Lights are off.');
    case PULSE_LIGHT:
      return state.set('trafficLights', 'Lights are pulsing.');
    case GO_LIGHT:
      return state.set('trafficLights', 'Initiating Go sequence.');
    case STOP_LIGHT:
      return state.set('trafficLights', 'Initiating Stop sequence.');
    case LIGHTS_LOOP:
      return state.set('trafficLights', 'Lights Loop Initiated.');
    case STOP_LOOP:
      return state.set('trafficLights', 'Lights Loop stopped.');
    default:
      return state;
  }
};

export default trafficLightReducer;
