'use strict';

// Vehicle
const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

// run car constructor function:
Car.prototype = new Vehicle();

// Motorcycle constructor
const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

// run car constructor function:
Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

// export 
module.exports = {Car, Motorcycle};
