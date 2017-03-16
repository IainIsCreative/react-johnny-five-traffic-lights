// @flow
import express from 'express';
import { Server } from 'http';
import socketIO from 'socket.io';

import { webPort, staticPath } from '../shared/config';
import renderApp from './render-app';

const app = express();
const http = Server(app);
const io = socketIO(http);
// setUpSocket(io);

app.use(staticPath, express.static('dist'));
app.use(staticPath, express.static('static'));

app.get('/', (req, res) => {
  res.send(renderApp());
})

http.listen(webPort, () => {
  console.log(`Server running on port ${webPort}`);
});
