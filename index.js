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
    },

    /**
     * Indexify the array of json object by properties of json object
     * @param {array} data
     * @param {string} attribute
     * @param {string} valueAttribute
     * @return {jsonObject}
     */
    indexify: (data, attr, valueAttr) => {
        return _.zipObject(_.map(data, attr), _.map(data, valueAttr));
    }
};