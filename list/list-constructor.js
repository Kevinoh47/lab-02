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
 */
// List.prototype.unshift = function(item) {
//   let newList = {};
//   newList['0'] = item;
  
//   for (var key in this.data) {
//     if (isInt(parseInt(key))) {
//       let newKey = parseInt(key) + 1;
//       newList[newKey] = this.data[key];
//     }
//   }
//   this.length++;
//   this.data = newList;
// };

//array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// List.prototype.splice = function(start, deleteCount, ...newItems) {

//   if (start > this.length) {
//     start = this.length;
//   }

//   // deletes
//   for (var key in this.data) {
//     // if deleteCount is omitted or if it is greater than length - start, all elements are deleted from start to end
//     if(!deleteCount || (deleteCount > (this.length - start))) {
//       if (key >= start) {
//         Object.delete(this.data[key]);
//       }
//     } 
//     // delete elements between start and start + delete count
//     else {
//       if (key >= start && key <= (key + deleteCount)) {
//         Object.delete(this.data[key]);
//       }
//     }
//   } 
//   // inserts
//   if (newItems) {

//   }

//   let newList = {};

// }


/**
 * credit: https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript#14794066
 * @param  value
 * @return bool
 */
function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value));
}



