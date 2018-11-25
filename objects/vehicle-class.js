'use strict';

class Vehicle {
  constructor(name) {
    this.name = name;
  }
  drive() {
    return('Moving Forward');
  }
  stop() {
    return('Stopping');
  }
}

class Car extends Vehicle {
  constructor(name, doors) {
    super(name);
    this.doors = (doors) ? doors: 2, 
    this.wheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name);
    this.wheels = 2;
  }
  wheelie() {
    return 'Wheee!';
  }
}

module.exports = {Car, Motorcycle};
