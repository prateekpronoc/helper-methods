'use strict';
let _ = require('lodash');
module.exports = {
  addTwoNumber: (a, b) => {
    return a + b;
  },
  /**
   * Indexify the array
   * @param {array} data
   * @param {string} attribute
   * @return {jsonObject}
   */
  indexifyArray: (data, attr) => {
    return _.zipObject(_.map(data, attr), data);
  }
};
