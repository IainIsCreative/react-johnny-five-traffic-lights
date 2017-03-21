// @flow
import { createAction } from 'redux-actions';

export const TEST_LIGHT = 'TEST_LIGHT';
export const STOP_LIGHT = 'STOP_LIGHT';
export const PULSE_LIGHT = 'PULSE_LIGHT';

export const testLight = () => {

  return {
    type: TEST_LIGHT,
    meta: { remote: true },
    payload: true,
  };

};

export const stopLight = () => {

  return {
    type: STOP_LIGHT,
    meta: { remote: true },
    payload: false,
  };
};

export const pulseLight = () => {
  return {
    type: PULSE_LIGHT,
    meta: { remote: true },
    payload: true,
  }
};
