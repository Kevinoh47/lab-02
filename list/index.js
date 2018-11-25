'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');
stuff.push('b');
stuff.push('c');

let last = stuff.pop();
console.log(last);

stuff.unshift('z');
console.log(stuff);


