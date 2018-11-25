'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
//const List = require('../list-constructor.js');

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
    expect(stuff.data).toEqual({'0': 'a', '1': 'b'});
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
    expect(stuff.data).toEqual({ '0': 'a', '1': 'b'} );

    let results = stuff.unshift('z');

    expect(results.data).toEqual({ '0': 'z', '1': 'a', '2': 'b'} );

  });

  it ('can slice out and return a subset list', () => {
    let input = ['a', 'b', 'c', 'd', 'e', 'f'];
    let stuff = new List();
    input.map(i => {stuff.push(i);});
 
    expect(stuff.data).toEqual({ '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4':'e', '5': 'f'} );

    let results = stuff.slice(0, 3);

    expect(results.data).toEqual({ '0': 'a', '1': 'b', '2': 'c'} );
  });

  it ('treats a slice begin value larger than the list length to return an empty list', () => {
    let input = ['a', 'b', 'c', 'd', 'e', 'f'];
    let stuff = new List();
    input.map(i => {stuff.push(i);});
 
    expect(stuff.data).toEqual({ '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4':'e', '5': 'f'} );

    let results = stuff.slice(47);

    expect(results.data).toEqual({});
    expect(results.length).toEqual(0);
  });

  it ('treats a negative slice begin value as an offset from the end', () => {
    let input = ['a', 'b', 'c', 'd', 'e', 'f'];
    let stuff = new List();
    input.map(i => {stuff.push(i);});
 
    expect(stuff.data).toEqual({ '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4':'e', '5': 'f'} );

    let results = stuff.slice(-2);

    expect(results.data).toEqual({ '0': 'e' , '1': 'f'});
    expect(results.length).toEqual(2);
  });

  it ('treats a negative slice end value as an offset from the end', () => {
    let input = ['a', 'b', 'c', 'd', 'e', 'f'];
    let stuff = new List();
    input.map(i => {stuff.push(i);});
 
    expect(stuff.data).toEqual({ '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4':'e', '5': 'f'} );

    let results = stuff.slice(2, -1);

    expect(results.data).toEqual({ '0': 'c', '1': 'd', '2':'e'});
    expect(results.length).toEqual(3);
  });

  it ('can splice (remove a range of values) from within the data set', () => {
    let input = ['a', 'b', 'c', 'd', 'e', 'f'];
    let stuff = new List();
    input.map(i => {stuff.push(i);});
 
    expect(stuff.data).toEqual({ '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4':'e', '5': 'f'} );

    let results = stuff.splice(1, 3);

    expect(results.data).toEqual({ '0': 'a', '1':'e', '2': 'f'} );
  });

  it ('can splice (remove a range of values) from within the data set, and replace what was removed with a new value', () => {
    let input = ['a', 'b', 'c', 'd', 'e', 'f'];
    let stuff = new List();
    input.map(i => {stuff.push(i);});
 
    expect(stuff.data).toEqual({ '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4':'e', '5': 'f'} );

    let results = stuff.splice(1, 3, 'z');

    expect(results.data).toEqual({ '0': 'a', '1':'z', '2':'e', '3': 'f'} );
  });

  it ('can splice (remove a range of values) from within the data set, and replace what was removed with multiple new values', () => {
    let input = ['a', 'b', 'c', 'd', 'e', 'f'];
    let stuff = new List();
    input.map(i => {stuff.push(i);});
 
    expect(stuff.data).toEqual({ '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4':'e', '5': 'f'} );

    let results = stuff.splice(1, 3, 'x','y','z');

    expect(results.data).toEqual({ '0': 'a', '1':'x', '2':'y', '3':'z','4':'e', '5': 'f'} );
  });

  it ('can splice, not remove anything, and add multiple new values on at the indicated position', () => {
    let input = ['a', 'b', 'c'];
    let stuff = new List();
    input.map(i => {stuff.push(i);});
 
    expect(stuff.data).toEqual({ '0': 'a', '1': 'b', '2': 'c'} );

    let results = stuff.splice(0, 0, 'x','y','z');

    expect(results.data).toEqual({ '0': 'x', '1':'y', '2':'z', '3':'a','4':'b', '5': 'c'} );
  });

});
