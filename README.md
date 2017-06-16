# React and Johnny-Five Traffic Lights

A simple project involving the use of Johnny-Five and React to control a set of lights, using actions and functions to control and animate them. This is an (imperfect) creation I'm releasing. This is actually the first project I made that makes use of JavaScript to build an IoT application.

## Circuit

The circuit is very simple for this — it consists of 3 LEDs (red, yellow, and green) to act like a set of traffic lights.

### List of components

* Arduino Uno (any Arduino would do, actually)
* Breadboard (Prefereably one with side rails for the power)
* 3 LEDs (1 red, 1 yellow, 1 green)
* 3 220Ohm Resistors
* 8 coloured jumper cables (5 black jumper cables for ground connection)

### Diagram

The diagram is pretty simple — connect up each LED to pins 11, 10, and 9, respectively, along with the 220Ohm resistors for each LED. Remember to attach the Ground so the circuit can work! All in all, the circuit is very simple to put together.

![https://raw.githubusercontent.com/IainIsCreative/react-johnny-five-traffic-lights/develop/assets/traffic-lights-diagram.jpg](Fritzieg Diagram of the Traffic Lights circuit.)


## Installing

You can use NPM or Yarn to install and use the application, though I recommend yarn, it's pretty good for dependency management.

You can do `npm install` or `yarn install` to download all the app's dependencies.

## Commands

There are various commands you can use to work the app, from building, to development, to testing. Again, you can use Yarn or NPM to run the app.

### List of Commands

* `start` — Start the app Server (note: run `build` first!)
* `build` — Build the app for a production environment
* `dev-start` — Start the app server under the development environment
* `dev-server` — Runs the Webpack development server for the client-side React app
* `styles` — Build the Application styles (uses PostCSS)
* `test` — Runs ESlint and Flow to check the code for issues.

## About The Author

[Iain](https://twitter.com/IainIsCreative) is a developer, designer, and artist with Asperger's Syndrome who makes things and has a fascination with all things creative. He likes to experiment with code, boards, and digital art.

### Support the author!

[Follow on Twitter](https://twitter.com/IainIsCreative), [like on Facebook](https://facebook.com/IainIsCreative), and pledge to Iain [on Patreon!](https://patreon.com/IainIsCreative)
