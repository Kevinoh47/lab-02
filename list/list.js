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

  splice(index, deleteCount = 0, ...inserts) {
    
    let upperBound = index + deleteCount;

    let myList = new List();

    let myInserts = inserts.slice(0);

    for (var i = 0; i < this.length; i++) {
      // inside the area we are removing, add whatever needs to be added.
      if (i >= index && i < upperBound) {
        if (myInserts.length) {
          inserts.forEach(e => {
            myList.push(e);
            myInserts.shift();
          });
        }
      }
      else if (i < index || i >= upperBound) {
        myList.push(this.data[i]);
      }
      // if none are being deleted, tack the new ones to the end
      // else {
      //   insertArr.forEach(e => {myList.push(e);});
      // }
    }
    return myList;
  }

}

module.exports = List;
