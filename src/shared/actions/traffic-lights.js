// @flow
import { createAction } from 'redux-actions';

export const TEST_LIGHT = 'TEST_LIGHT';

export const testLight = createAction(TEST_LIGHT, () => true ? false : true);
