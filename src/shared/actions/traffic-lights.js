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

export const lightsToggle = () => {
  if (lightsOn) {
    lightsOn = false;
  } else {
    lightsOn = true;
  }

  return {
    type: lightsOn ? LIGHTS_ON : LIGHTS_OFF,
    meta: { remote: true },
    payload: lightsOn ? 'lights on' : 'lights off',
  };
};

export const goLight = () => {
  return {
    type: GO_LIGHT,
    meta: { remote: true },
    payload: 'go sequence',
  };
};

export const stopLight = () => {
  return {
    type: STOP_LIGHT,
    meta: { remote: true },
    payload: 'stop sequence',
  };
};

export const pulseLight = () => {
  if (pulse) {
    pulse = false;
  } else {
    pulse = true;
  }
  return {
    type: pulse ? PULSE_LIGHT : LIGHTS_OFF,
    meta: { remote: true },
    payload: pulse ? 'lights pulsing' : 'lights off',
  }
};

export const lightsLoop = () => {

  if(loop) {
    loop = false;
  } else {
    loop = true;
  }

  return {
    type: loop ? LIGHTS_LOOP : LIGHTS_OFF,
    meta: { remote: true },
    payload: loop ? 'loop sequence' : 'loop stopped',
  };
}
