// @flow
import express from 'express';
import { Server } from 'http';
import socketIO from 'socket.io';
import { Board, Led } from 'johnny-five';

import { webPort, staticPath } from '../shared/config';
import renderApp from './render-app';

const app = express();
// flow-disable-next-line
const http = Server(app);
const io = socketIO(http);
// setUpSocket(io);

app.use(staticPath, express.static('dist'));
app.use(staticPath, express.static('static'));

app.get('/', (req, res) => {
  res.send(renderApp());
});

http.listen(webPort, () => {
  console.log(`Server running on port ${webPort}`);
});

io.on('connect', (socket) => {
  console.log('[socket.io] A client connected');
});

const board = new Board();

let redLight, yellowLight, greenLight;

board.on('ready', function() {
  console.log('[johnny-five] Robot Online.');

  redLight = new Led('11');

  this.repl.inject({
    hello: () => {
      redLight.pulse(500);
      console.log('[johnny-five] Hello World!');
    },

    off: () => {
      redLight.stop().off();
      console.log('[johnny-five] Sleeping now.');
    }
  });
});
