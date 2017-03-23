// @flow
import express from 'express';
import { Server } from 'http';
import socketIO from 'socket.io';
import { Board, Leds } from 'johnny-five';

import { webPort, staticPath } from '../shared/config';
import renderApp from './render-app';
import { TEST_LIGHT, STOP_LIGHT, PULSE_LIGHT } from '../shared/actions/traffic-lights';
import TrafficLights from '../robot/traffic-lights';

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

  const l = new TrafficLights(lights);

  io.on('connection', (socket) => {
    console.log('[socket.io] A client connected');
    socket.on('action', (action) => {
      switch(action.type) {
        case TEST_LIGHT:
          l.loopLights();
          break;
        case STOP_LIGHT:
          l.stopLoop();
          break;
        case PULSE_LIGHT:
          l.testLights();
          break;
      }
    });
  });

  board.on('exit', () => {
    l.lightsOff();
  });

});
