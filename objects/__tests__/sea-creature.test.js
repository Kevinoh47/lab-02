'use strict';

//const SeaCreature = require('../sea-creature-constructor.js');
//const SeaCreature = require('../sea-creature-class.js');
const SeaCreature = require('../sea-creature-factory.js');

describe('SeaCreatures', () => {

  describe('Fish', () => {

    let fish = new SeaCreature.Fish('foo');

    it('has gills', () => {
      expect(fish.breathe).toEqual('gills');
    });

    it('does not have blowhole', () => {
      expect(fish.blowhole).toBeFalsy();
    });

    it('can swim', () => {
      expect(fish.swim()).toBeTruthy();
    });

    it('can not pinch', () => {
      expect(fish.pinch).toBeUndefined();
    });

    it('cannot do a wheelie', () => {
      expect(fish.wheelie).toBeUndefined();
    });

  });

  describe('Lobster', () => {

    let lobster = new SeaCreature.Lobster('foo');

    it('has gills', () => {
      expect(lobster.breathe).toEqual('gills');
    });

    it('does not have blowhole', () => {
      expect(lobster.blowhole).toBeFalsy();
    });

    it('can swim', () => {
      expect(lobster.swim()).toBeTruthy();
    });

    it('can pinch', () => {
      expect(lobster.pinch()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(lobster.wheelie).toBeUndefined();
    });

  });

  describe('Whale', () => {

    let whale = new SeaCreature.Whale('foo');

    it('has lungs rather than gills', () => {
      expect(whale.breathe).toEqual('lungs');
    });

    it('has a blowhole', () => {
      expect(whale.blowhole).toBeTruthy();
    });

    it('can swim', () => {
      expect(whale.swim()).toBeTruthy();
    });

    it('can not pinch', () => {
      expect(whale.pinch).toBeUndefined();
    });

    it('cannot do a wheelie', () => {
      expect(whale.wheelie).toBeUndefined();
    });

  });

});
