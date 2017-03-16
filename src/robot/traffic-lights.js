var delay = 1500;

function Lights(stop, start, go) {

  this.stop = stop;
  this.start = start;
  this.go = go;
  this.init();

  return this;

}

Lights.prototype = {

  init: function() {
    this.stop.on();
    this.start.off();
    this.go.off();
  },

  goLight: function() {
    var stopLight = this.stop;
    var startLight = this.start;
    var goLight = this.go;

    startLight.on();
    setTimeout(function() {
      stopLight.off();
      startLight.off();
      goLight.on();
    }, delay);
  },

  stopLight: function() {
    var stopLight = this.stop;
    var startLight = this.start;
    var goLight = this.go;

    startLight.pulse(delay / 5);
    goLight.off();
    setTimeout(function() {
      startLight.stop().off();
      stopLight.on();
    }, delay);
  },

  off: function() {
    this.stop.off();
    if(this.start.pulse()) {
      console.log('true');
      this.start.stop().off();
    } else {
      this.start.off();
    }
    this.go.off();
  },

}

export default Lights;
