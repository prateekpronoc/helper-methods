'use strict';

var expect = require('chai').expect;
var indexify = require('../index.js');
describe('#addTwoNumber', function() {
    it('should add two numbers', function() {
        var result = indexify.addTwoNumber(1,2);
        expect(result).to.equal(3);
    });
});
