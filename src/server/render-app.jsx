// @flow

import { appName, appContainer, staticPath, wdsPort } from '../shared/config';

const renderApp = () => (
  `<!doctype html>
  <html>
      <meta charset="utf-8">
      <title>${appName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
  </html>
  <body>
    <div class="${appContainer}"></div>
    <script src="http://localhost:7000/dist/js/bundle.js"></script>
  </body>
  `
);

export default renderApp;
