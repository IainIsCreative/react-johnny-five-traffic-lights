// @flow
import express from 'express';
import { Server } from 'http';
import socketIO from 'socket.io';
import { Board, Leds } from 'johnny-five';

import { webPort, staticPath } from '../shared/config';
import renderApp from './render-app';

import { TEST_LIGHT, STOP_LIGHT, PULSE_LIGHT } from '../shared/actions/traffic-lights';

const app = express();
// flow-disable-next-line
const http = Server(app);
const io = socketIO.listen(http);
// setUpSocket(io);

app.use(staticPath, express.static('dist'));
app.use(staticPath, express.static('static'));

app.get('/', (req, res) => {
  res.send(renderApp());
});

http.listen(webPort, () => {
  console.log(`Server running on port ${webPort}`);
});

const board = new Board();

let lights, redLight, yellowLight, greenLight;

board.on('ready', function() {
  console.log('[johnny-five] Robot Online.');

  lights = new Leds([11, 10, 9]);

  // redLight = lights[0];
  // yellowLight = lights[1];
  // greenLight = lights[2];

  // lights.pulse();

  io.on('connection', (socket) => {
    console.log('[socket.io] A client connected');
    socket.on('action', (action) => {
      switch(action.type) {
        case TEST_LIGHT:
          lights.on();
          console.log('[johnny-five] Hello World!');
          break;
        case STOP_LIGHT:
          lights.stop().off();
          console.log('[johnny-five] Sleeping now.');
          break;
        case PULSE_LIGHT:
          lights.pulse();
          console.log('[johnny-five] Pulsing!');
          break;
        default:
          return false;
      }
    });
  });

  this.repl.inject({

    off: () => {
      lights.stop().off();
    },
  });

  board.on('exit', () => {
    lights.stop().off();
  });

});
