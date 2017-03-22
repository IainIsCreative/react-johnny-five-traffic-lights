var delay = 1500;

class TrafficLights {

  lights: Array;

  constructor(lights: Array) {
    this.lights = lights;
    this.red = lights[0];
    this.yellow = lights[1];
    this.green = lights[2];
  }

  lightsOn() {
    console.log('[johnny-five] Lights are on.');
    this.lights.on();
  }

  lightsOff() {
    console.log('[johnny-five] Lights are off.');
    this.lights.stop().off();
  }

  testLights() {
    console.log('[johnny-five] Testing lights with pulse function.');
    this.lights.pulse();
  }

  toStopPosition() {
    console.log('[johnny-five] Proceeding with Stop Sequence.');

    this.red.stop().off();
    this.yellow.stop().off();
    this.green.on();

    setTimeout(() => {
      this.green.stop().off();
      this.yellow.pulse(300)
    }, 2000);

    setTimeout(() => {
      this.red.on();
      this.yellow.stop().off();
    }, 3500);

  }

  toGoPosition() {
    console.log('[johnny-five] Proceeding with Go Sequence.');

    this.red.on();
    this.yellow.stop().off();
    this.green.stop().off();

    setTimeout(() => {
      this.yellow.on();
    }, 2000);

    setTimeout(() => {
      this.red.stop().off();
      this.yellow.stop().off();
      this.green.on();
    }, 3500);

  }

  loopLights() {
    console.log('[johnny-five] Lights Looping.');

    this.toGoPosition();

    setTimeout(() => {
      this.toStopPosition();
    }, 4000);

    setTimeout(() => {
      this.loopLights();
    }, 8000);

  }

  stopLoop() {
    this.lightsOff();
    setTimeout(() => {
      this.lightsOn();
    }, 300);
  }

}

export default TrafficLights;
