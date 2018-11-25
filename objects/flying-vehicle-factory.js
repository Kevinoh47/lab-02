'use strict';

const FlyingVehicle = () => ({
  fly: () => { return 'Up up and away!';},
  land: () => { return 'Coming down...';},
});

// airplane factory
function Airplane(name) {
  let meansOfFlight = 'wings';
  let airplane = Object.assign( {}, {name}, {meansOfFlight}, FlyingVehicle());
  return Object.freeze(airplane);
}

// helicopter factory
function Helicopter(name) {
  let meansOfFlight = 'rotor';
  let helicopter = Object.assign( {}, {name}, {meansOfFlight}, {hover}, FlyingVehicle());

  function hover() { return 'hovering!';}

  return Object.freeze(helicopter);
}

// balloon factory
function Balloon(name) {
  let meansOfFlight = 'gas';
  let helicopter = Object.assign( {}, {name}, {meansOfFlight}, {float}, FlyingVehicle());

  function float() { return 'floating on air!';}

  return Object.freeze(helicopter);
}

module.exports = {Airplane, Helicopter, Balloon};


