// @flow

export const LIGHTS_ON = 'LIGHTS_ON';
export const LIGHTS_OFF = 'LIGHTS_OFF';
export const GO_LIGHT = 'GO_LIGHT';
export const STOP_LIGHT = 'STOP_LIGHT';
export const PULSE_LIGHT = 'PULSE_LIGHT';
export const LIGHTS_LOOP = 'LIGHTS_LOOP';
export const STOP_LOOP = 'STOP_LOOP';

let lightsOn = false;
let pulse = false;
let loop = false;

/**
 *
 * Traffic Light Actions
 *
 * These functions are our actions — each function can be placed into our app's
 * containers. In this case, the buttons on our interface will execute these
 * functions on click and update our store.
 *
 */

export const lightsToggle = () => {
  if (lightsOn) {
    lightsOn = false;
  } else {
    lightsOn = true;
  }

  return {
    type: lightsOn ? LIGHTS_ON : LIGHTS_OFF,
    meta: { remote: true },
    payload: lightsOn ? 'Lights are on.' : 'Lights are off.',
  };
};

export const goLight = () => ({
  type: GO_LIGHT,
  meta: { remote: true },
  payload: 'Initiating Go sequence.',
});

export const stopLight = () => ({
  type: STOP_LIGHT,
  meta: { remote: true },
  payload: 'Initiating Stop sequence.',
});

export const pulseLight = () => {
  if (pulse) {
    pulse = false;
  } else {
    pulse = true;
  }

  return {
    type: pulse ? PULSE_LIGHT : LIGHTS_OFF,
    meta: { remote: true },
    payload: pulse ? 'Lights are pulsing.' : 'Lights are off.',
  };
};

export const lightsLoop = () => {
  if (loop) {
    loop = false;
  } else {
    loop = true;
  }

  return {
    type: loop ? LIGHTS_LOOP : STOP_LOOP,
    meta: { remote: true },
    payload: loop ? 'Lights Loop initiated.' : 'Lights Loop stopped.',
  };
};
