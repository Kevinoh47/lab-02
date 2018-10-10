'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * Remove an item from the end of the list and return its value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

/**
 * Remove an item from the beginning of the list and return its value
 *  @returns {*}
 */
List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  this.length--;
  return returnValue;
};

/**
 * Add item to the beginning of the list and increment list length property
 * @param item
 * @returns list object
 */
List.prototype.unshift = function(item) {
  let newList = {};
  newList['0'] = item;
  
  for (var key in this.data) {
    let newKey = parseInt(key) + 1;
    newList[newKey] = this.data[key];
  }
  this.length++;
  //return returnValue;
  this.data = newList;
};

module.exports = List;
