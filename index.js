'use strict';
let _ = require('lodash');
module.exports = {

    /**
     * Add Two Number
     * @param {integer} num1
     * @param {integer} num2
     * @return {integer}
     */
    addTwoNumber: (num1, num2) => {
        return num1 +  num2;
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
    },

    /**
     * Convert json Object to an array by properties
     * @param {jsonObject} object
     * @return {array}
     */
    jsonToArray: (object) => {
        if (!object || _.size(object) === 0) {
            return [];
        }
        let arr = [],
            ob = {};
        _.forOwn(object, function(value, key) {
            ob[key] = value;
            arr.push(ob);
            ob = {};
        });
        return arr;
    },

    /**
     * JSON Object differences
     * @param {jsonObject} object1
     * @param {jsonObject} object2
     * @param {arrayOfObjectKey} keys
     * @return {jsonObject}
     */
    objectDifference: (object1, object2, keys) => {
        if (!object1 || _.size(object1) === 0) {
            return {};
        }
        if (!object2 || _.size(object2) === 0) {
            return object1;
        }
        if (!_.isObject(object1) || !_.isObject(object2)) {
            return object1;
        }
        if (!keys) {
            keys = _.keys(object1);
        }
        var obj = {};
        _.forOwn(_.pick(object1, keys), function(value, key) {
            if ((object2[key] === undefined && value !== undefined) || (object2[key] === null && value !== null) || object2[key] !== value) {
                obj[key] = value;
            }
        });
        return obj;
    }
};
