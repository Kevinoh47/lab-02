'use strict';

// These 2 should be interchangeable!
//const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
  });

  it ('pops items off the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.push('d');
    stuff.pop();

    expect(stuff.length).toEqual(3);
  });

  it ('shifts items off the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    let removed = stuff.shift();
    expect(removed).toBeTruthy();
    expect(removed).toEqual('a');
    expect(stuff.length).toEqual(2);
    expect(stuff.data).toEqual({'1': 'b', '2': 'c'});
  });

  it ('multiple pushes make correct object data', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.data).toEqual({ '0': 'a', '1': 'b'} );
  });

  it ('can add items to the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.unshift('z');

    expect(stuff.data).toEqual({ '0': 'z', '1': 'a', '2': 'b'} );

  });

});
