'use strict';

// Flying-Vehicle
const FlyingVehicle = function(name, meansOfFlight) {
  this.name = name;
  this.meansOfFlight = meansOfFlight;
};

FlyingVehicle.prototype.fly = () => {
  return 'Up up and away!';
};

FlyingVehicle.prototype.land = () => {
  return 'Coming down...';
};

// Airplane Constructor
const Airplane = function(name) {
  FlyingVehicle.call(this, name, 'wings');
};

Airplane.prototype = new FlyingVehicle();

// Helicopter Constructor
const Helicopter = function(name) {
  FlyingVehicle.call(this, name, 'rotor');
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.hover = () => {
  return 'hovering...';
};

// Hot air balloon Constructor
const Balloon = function(name) {
  FlyingVehicle.call(this, name, 'gas');
};

Balloon.prototype = new FlyingVehicle();

Balloon.prototype.float = () => {
  return 'floating...';
};

module.exports = {Airplane, Helicopter, Balloon};
