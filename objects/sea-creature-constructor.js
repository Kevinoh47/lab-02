'use strict';

// Sea Creature
const SeaCreature = function(name, breathe) {
  this.name = name;
  this.breathe = breathe;
};

SeaCreature.prototype.swim = () => {
  return 'swim swim swim...';
};

// Fish Constructor
const Fish = function(name) {
  SeaCreature.call(this, name, 'gills');
};

Fish.prototype = new SeaCreature();

// Lobster Constructor
const Lobster = function(name) {
  SeaCreature.call(this, name, 'gills');
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.pinch = () => {
  return 'pinch pinch pinch...';
};

// Whale Constructor
const Whale = function(name) {
  SeaCreature.call(this, name, 'lungs');
};

Whale.prototype = new SeaCreature();
Whale.prototype.blowhole = 'Whooosh';


module.exports = {Fish, Lobster, Whale};
