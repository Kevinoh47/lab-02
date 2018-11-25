'use strict';

const SeaCreature = () => ({
  swim: () => { return 'swim swim swim';},
});

// fish factory
function Fish(name) {
  let breathe = 'gills';
  let fish = Object.assign( {}, {name}, {breathe}, SeaCreature());
  return Object.freeze(fish);
}

// lobster factory
function Lobster(name) {
  let breathe = 'gills';
  let lobster = Object.assign( {}, {name}, {breathe}, {pinch}, SeaCreature());

  function pinch() { return 'pinch pinch pinch';}

  return Object.freeze(lobster);
}

// whale factory
function Whale(name) {
  let breathe = 'lungs';
  let blowhole = 'Whooosh';
  let whale = Object.assign( {}, {name}, {breathe}, {blowhole}, SeaCreature());

  return Object.freeze(whale);
}

module.exports = {Fish, Lobster, Whale};


