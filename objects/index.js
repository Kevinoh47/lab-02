'use strict';

// const Vehicle = require('./vehicle-constructor.js');
// const FlyingVehicle = require('./flying-vehicle-constructor.js');
// const SeaCreature = require('./sea-creature-constructor.js');

// const Vehicle = require('./vehicle-class.js');
// const FlyingVehicle = require('./flying-vehicle-class.js');
// const SeaCreature = require('./sea-creature-class');

const Vehicle = require('./vehicle-factory.js');
const FlyingVehicle = require('./flying-vehicle-factory.js');
const SeaCreature = require('./sea-creature-factory.js');

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement aircraft
const boeing = new FlyingVehicle.Airplane('Boeing 737');
console.log(boeing.name, boeing.fly(), boeing.land());

const blackhawk = new FlyingVehicle.Helicopter('Sikorsky');
console.log(blackhawk.name, blackhawk.fly(), blackhawk.hover(), blackhawk.land());

const myBalloon = new FlyingVehicle.Balloon('My Fancy Balloon');
console.log(myBalloon.name, myBalloon.fly(), myBalloon.float(), myBalloon.land());

// Implement sea creatures
const tuna = new SeaCreature.Fish('Charlie', true);
console.log(tuna.name, tuna.swim());

const lobster = new SeaCreature.Lobster('Larry', true);
console.log(lobster.name, lobster.swim(), lobster.pinch());

const orca = new SeaCreature.Whale('Orky', false);
console.log(orca.name, orca.blowhole, orca.swim);