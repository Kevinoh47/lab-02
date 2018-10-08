'use strict';

class FlyingVehicle {
  constructor(name, meansOfFlight) {
    this.name = name;
    this.meansOfFlight = meansOfFlight;
  }
  fly() {
    return('Up up and away!');
  }
  land() {
    return('Coming down...');
  }
}

class Airplane extends FlyingVehicle {
  constructor(name) {
    super(name);
    this.meansOfFlight = 'wings';
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name) {
    super(name);
    this.meansOfFlight = 'rotor';
  }
  hover() {
    return 'hovering...';
  }
}

class Balloon extends FlyingVehicle {
  constructor(name) {
    super(name);
    this.meansOfFlight = 'gas';
  }
  float() {
    return 'floating on air...';
  }
}

module.exports = {Airplane, Helicopter, Balloon};