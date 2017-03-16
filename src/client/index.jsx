// @flow
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from '../shared/app';
import { appContainerSelector } from '../shared/config';

const rootEl = document.querySelector(appContainerSelector);

const AppWrapper = (AppComponent) => (
  <AppContainer>
    <AppComponent />
  </AppContainer>
);

ReactDOM.render(AppWrapper(App), rootEl);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    /* eslint-disable global-require */
    const NextApp = require('../shared/app').default;
    /* eslint-enable global-require */
    ReactDOM.render(AppWrapper(App), rootEl);
  });
}
