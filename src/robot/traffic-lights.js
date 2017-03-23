/**
 *
 * TrafficLights Class
 *
 * Stores all the functionality for each robot's action when a socket receives
 * an action from the client side.
 *
 * @param {Array} lights - the LEDs that are connected to the robot (red,
 * yellow, and green lights). These are then stored in a `lights` variable and
 * then place each light in their own variable for use in functions.
 *
 */
class TrafficLights {

  lights: Array;

  constructor(lights: Array) {
    this.lights = lights;
    this.red = lights[0];
    this.yellow = lights[1];
    this.green = lights[2];

    this.loop = undefined;
  }

  /**
   *
   * lightsOn() function
   *
   * Very simple, just turns all the lights on.
   *
   */
  lightsOn() {
    console.log('[johnny-five] Lights are on.');
    this.lights.on();
  }

  /**
   *
   * lightsOff() function
   *
   * Stops all the lights in case they're doing a digital function, and then
   * turn all the lights off.
   *
   */
  lightsOff() {
    console.log('[johnny-five] Lights are off.');
    this.lights.stop().off();
  }

  /**
   *
   * pulseLights() function
   *
   * Makes the lights do a pulse function in Johnny-Five.
   *
   */
  pulseLights() {
    console.log('[johnny-five] Testing lights with pulse function.');
    this.lights.pulse();
  }

  /**
   *
   * toGoPosition() function
   *
   * The function will stop all the lights except leave the red light on.
   * After two seconds, turn on the yellow light.
   * After three and a half seconds, turn off the red and yellow lights, then
   * put on the green light.
   *
   */
  toGoPosition() {
    console.log('[johnny-five] Proceeding with Go Sequence.');

    this.red.on();
    this.yellow.stop().off();
    this.green.stop().off();

    setTimeout(() => {
      this.yellow.on();
    }, 2000);

    setTimeout(() => {
      this.red.off();
      this.yellow.off();
      this.green.on();
    }, 3500);

  }

  /**
   *
   * toStopPosition() function
   *
   * The function will turn off all lights except the green light.
   * After two and a half seconds, the green light will turn off and the yellow
   * light will pulse every 300 milliseconds.
   * After three and a half seconds, the yellow lights turns off and the red
   * light comes on, thus back to the stop position.
   *
   */
  toStopPosition() {
    console.log('[johnny-five] Proceeding with Stop Sequence.');

    this.red.stop().off();
    this.yellow.stop().off();
    this.green.on();

    setTimeout(() => {
      this.green.off();
      this.yellow.pulse(300)
    }, 2000);

    setTimeout(() => {
      this.red.on();
      this.yellow.stop().off();
    }, 3500);

  }

  /**
   *
   * buildLoop() function
   *
   * Small function to wrap the sequence of the loop.
   * At the start, it will do the 'Go' sequence.
   * After four seconds, the 'Stop' sequence begins.
   *
   */
  buildLoop() {
    this.toGoPosition();

    setTimeout(() => {
      this.toStopPosition();
    }, 4000);

  }

  /**
   *
   * loopLights() function
   *
   * Start the loop, and every eight seconds repeat the loop.
   *
   */
  loopLights() {
    console.log('[johnny-five] Lights Looping.');
    this.buildLoop();

    this.loop = setTimeout(() => {
      this.buildLoop();
    }, 8000);

  }

  stopLoop() {
    clearTimeout(this.loop);
    this.loop = undefined;
    this.lightsOff();
    setTimeout(() => {
      this.lightsOn();
    }, 300);
  }

}

export default TrafficLights;
