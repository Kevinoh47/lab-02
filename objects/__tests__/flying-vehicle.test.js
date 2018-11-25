'use strict';

//const FlyingVehicle = require('../flying-vehicle-constructor.js');
//const FlyingVehicle = require('../flying-vehicle-class.js');
const FlyingVehicle = require('../flying-vehicle-factory.js');

describe('FlyingVehicles', () => {

  describe('Airplane', () => {

    let airplane = new FlyingVehicle.Airplane('foo');

    it('flies by means of', () => {
      expect(airplane.meansOfFlight).toEqual('wings');
    });

    it('can fly', () => {
      expect(airplane.fly()).toBeTruthy();
    });

    it('can land', () => {
      expect(airplane.land()).toBeTruthy();
    });

    it('cannot hover', () => {
      expect(airplane.hover).toBeUndefined();
    });

    it('cannot float', () => {
      expect(airplane.float).toBeUndefined();
    });

  });

  describe('Helicopter', () => {

    let helicopter = new FlyingVehicle.Helicopter('foo');

    it('flies by means of', () => {
      expect(helicopter.meansOfFlight).toEqual('rotor');
    });

    it('can fly', () => {
      expect(helicopter.fly()).toBeTruthy();
    });

    it('can land', () => {
      expect(helicopter.land()).toBeTruthy();
    });

    it('can hover', () => {
      expect(helicopter.hover).toBeTruthy();
    });

    it('cannot float', () => {
      expect(helicopter.float).toBeUndefined();
    });

  });

  describe('Balloon', () => {

    let balloon = new FlyingVehicle.Balloon('foo');

    it('flies by means of', () => {
      expect(balloon.meansOfFlight).toEqual('gas');
    });

    it('can fly', () => {
      expect(balloon.fly()).toBeTruthy();
    });

    it('can land', () => {
      expect(balloon.land()).toBeTruthy();
    });

    it('cannot hover', () => {
      expect(balloon.hover).toBeUndefined();
    });

    it('can float', () => {
      expect(balloon.float).toBeTruthy();
    });

  });

});
