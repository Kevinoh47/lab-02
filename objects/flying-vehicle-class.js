'use strict';

/** 
 * Class FlyingVehicle is the base class for all types of aircraft
 * @param  {} name
 * @param  {} meansOfFlight
 */
class FlyingVehicle {
  constructor(name, meansOfFlight) {
    this.name = name;
    this.meansOfFlight = meansOfFlight;
  }
  /** 
   * fly() method describes the vehicle taking off.
   * @param  {} {return('Upupandaway!'
   */
  fly() {
    return('Up up and away!');
  }

  /** 
   * land() method describes returning to earth.
   * @param  {} {return('Comingdown...'
   */
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
  /**
   * hover() method allows the helicopter to stay in one place in the atmosphere.
   */
  hover() {
    return 'hovering...';
  }
}

class Balloon extends FlyingVehicle {
  constructor(name) {
    super(name);
    this.meansOfFlight = 'gas';
  }

  /**
   * float() method allows the balloon to just go where the wind pushes it.
   */
  float() {
    return 'floating on air...';
  }
}

module.exports = {Airplane, Helicopter, Balloon};