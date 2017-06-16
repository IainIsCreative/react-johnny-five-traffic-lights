// @flow
import express from 'express';
import { Server } from 'http';
import socketIO from 'socket.io';
import { Board, Leds } from 'johnny-five';

import { webPort, staticPath } from '../shared/config';
import renderApp from './render-app';

// Import our Redux actions for the lights
import {
  LIGHTS_ON,
  LIGHTS_OFF,
  PULSE_LIGHT,
  GO_LIGHT,
  STOP_LIGHT,
  LIGHTS_LOOP,
  STOP_LOOP,
} from '../shared/actions/traffic-lights';

// Import our TrafficLights() class.
import TrafficLights from '../robot/traffic-lights';

const app = express();
// flow-disable-next-line
const http = Server(app);
const io = socketIO.listen(http);

// Set `dist` and `static` under the same path
app.use(staticPath, express.static('dist'));
app.use(staticPath, express.static('static'));

// When the page is requested, render our app
app.get('/', (req, res) => {
  res.send(renderApp());
});

http.listen(webPort, () => {
  console.log(`Server running on port ${webPort}`);
});

// Set up a new Board instance for johnny-five
const board = new Board();

// Set light variables.
let lights;

/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-arrow-callback */
board.on('ready', function() {
  // Tell the terminal that the robot is working
  console.log('[johnny-five] Robot Online.');

  // Place the LED array inside the `lights` variable.
  lights = new Leds([11, 10, 9]);

  // Place the `lights` inside our `TrafficLights()` class
  const l = new TrafficLights(lights);

  /**
   *
   * Sockets and Actions for the Robot.
   *
   * If our app is connected, wait for specific actions to happen in our store.
   * When a particular action happens, the robot should execute the specific
   * function within the class.
   *
   */
  io.on('connection', (socket) => {
    console.log('[socket.io] A client connected');
    socket.on('action', (action) => {
      switch (action.type) {
        case LIGHTS_ON:
          l.lightsOn();
          break;
        case LIGHTS_OFF:
          l.lightsOff();
          break;
        case PULSE_LIGHT:
          l.pulseLights();
          break;
        case GO_LIGHT:
          l.toGoPosition();
          break;
        case STOP_LIGHT:
          l.toStopPosition();
          break;
        case LIGHTS_LOOP:
          l.loopLights();
          break;
        case STOP_LOOP:
          l.lightsOff();
          break;
        default:
          l.lightsOff();
          break;
      }
    });
  });

  /**
   * Should there be an exit on the board instance, turn all the lights off.
   */
  board.on('exit', () => {
    l.lightsOff();
  });
});
/* eslint-enable prefer-arrow-callback */
/* eslint-enable space-before-function-paren */
