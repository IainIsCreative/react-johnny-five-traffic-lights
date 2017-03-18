// @flow
import { createAction } from 'redux-actions';

export const TEST_LIGHT = 'TEST_LIGHT';

let test = false;

export const testLight = createAction(TEST_LIGHT, () => {

  if (test) {
    test = false;
  } else {
    test = true;
  }

  return test;

});
