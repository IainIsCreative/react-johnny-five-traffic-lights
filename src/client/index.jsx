// @flow
import 'babel-polyfill';

import * as Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import socketIOClient from 'socket.io-client';
import socketIoMiddleware from 'redux-socket.io-middleware';

import App from '../shared/app';
import trafficLightReducer from '../shared/reducers/traffic-lights';
import { appContainerSelector } from '../shared/config';

const io = socketIOClient(window.location.host);

const rootEl = document.querySelector(appContainerSelector);

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

// Make our store store with our reducer and socket.io middleware
const store = createStore(combineReducers(
  { lights: trafficLightReducer }),
  composeEnhancers(applyMiddleware(
    socketIoMiddleware(io),
  )),
);

/**
 *
 * Take our App component and place it under the wrapper so it can interact with
 * our Redux store and get Hot Reloading.
 *
 */
const AppWrapper = (AppComponent, ReduxStore) => (
  <Provider store={ReduxStore}>
    <AppContainer>
      <AppComponent />
    </AppContainer>
  </Provider>
);

// Let the browser console know that it's connected
io.on('connect', () => {
  console.log('[socket.io] A client connected');
});

// Get React to render our app
ReactDOM.render(AppWrapper(App, store), rootEl);

// If the application has changed, place the changes into the browser
if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    /* eslint-disable global-require */
    const NextApp = require('../shared/app').default;
    /* eslint-enable global-require */
    ReactDOM.render(AppWrapper(App), rootEl);
  });
}
