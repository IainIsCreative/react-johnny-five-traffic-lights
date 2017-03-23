// @flow
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { appName, appContainer, staticPath, wdsPort } from '../shared/config';

const renderApp = () => (
  `<!doctype html>
  <html>
      <meta charset="utf-8">
      <title>${appName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </html>
  <body>
    <h1>Traffic Lights with Johnny-Five and React</h1>
    <div class="${appContainer}"></div>
    <script src="/static/js/bundle.js"></script>
  </body>
  `
);

export default renderApp;
