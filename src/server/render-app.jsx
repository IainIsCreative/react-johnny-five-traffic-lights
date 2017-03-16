// @flow

import { appName, appContainer, staticPath, wdsPort } from '../shared/config';

const renderApp = () => (
  `<!doctype html>
  <html>
      <meta charset="utf-8">
      <title>${appName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="${staticPath}/css/main.css">
  </html>
  <body>
    <div class="${appContainer}"></div>
    <script src="${staticPath}/dist/js/bundle.js"></script>
  </body>
  `
);

export default renderApp;
