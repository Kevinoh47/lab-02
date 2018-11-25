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

  slice (begin = 0, end) {
    
    if (begin > this.length) {
      return new List();
    }

    if (begin < 0) {
      begin = this.length + begin;
    }

    if (end < 0) {
      end = this.length + end;
    }

    if (!end || end > this.length) {
      end = this.length;
    }

    let returnList = new List();

    for (var i = 0; i <= this.length; i++) {
      if (i >= begin && i < end ) {
        returnList.push(this.data[i]);
      }
    }
    return returnList;
  }

  splice(start, deleteCount = 0, ...inserts) {
    
    if (start > this.length) {
      start = this.length;
    }

    let upperBound = start + deleteCount;

    let myList = new List();

    let myInserts = inserts.slice(0);

    // delete loop
    if (deleteCount > 0 ) {
      for (var i = 0; i < this.length; i++) {
        // inside the area we are removing, or at the index if nothing is being deleted, add whatever needs to be added.
        if (i >= start && i < upperBound) {

          if (myInserts.length) {
            inserts.forEach(e => {
              myList.push(e);
              myInserts.shift();
            });
          }
        }
        // otherwise, add the current values of the input array to the new array
        else if (i < start || i >= upperBound) {
          myList.push(this.data[i]);
        }
      }
    }
    // no deletes, only adds
    else if (deleteCount <= 0) {
      for (var j = 0; j < this.length; j++) {
        if (j === start) {
          if (myInserts.length) {
            inserts.forEach(e => {
              myList.push(e);
              myInserts.shift();
            });
          }
          myList.push(this.data[j]);
        }
        // otherwise, add the current values of the input array to the new array
        else {
          myList.push(this.data[j]);
        }
      }
    }

    return myList;
  }

}

module.exports = List;
