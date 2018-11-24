'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end //NOTE KO SEE PHOTO OF BOARD FOR CHANGES
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return its value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  shift() {
    let returnValue = this.data[0];
    delete this.data[0];
    this.length--;
    return returnValue;
  }

  unshift(item) {

    let myList = new List();

    myList.push(item);

    for (var i = 0; i < this.length; i++) {
      myList.push(this.data[i]);
    }

    return myList;

  }

}

module.exports = List;
