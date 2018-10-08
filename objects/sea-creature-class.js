'use strict';

class SeaCreature {
  constructor(name, breathe) {
    this.name = name;
    this.breathe = breathe;
  }
  swim() {
    return 'swim swim swim...';
  }
}

class Fish extends SeaCreature {
  constructor(name) {
    super(name);
    this.breathe = 'gills';
  }
}

class Lobster extends SeaCreature {
  constructor(name) {
    super(name);
    this.breathe = 'gills';
  }
  pinch() {
    return 'pinch pinch pinch...';
  }
}

class Whale extends SeaCreature {
  constructor(name) {
    super(name);
    this.breathe = 'lungs';
    this.blowhole = 'Whooosh';
  }
}

module.exports = {Fish, Lobster, Whale};