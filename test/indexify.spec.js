'use strict';

var expect = require('chai').expect;
var helper = require('../index.js');
describe('#Indexify', function() {
    it('should convert array to json object by attributes', function() {
        var data = [{
            'id': 1,
            'user': 'barney',
            'active': false
        }, {
            'id': 2,
            'user': 'fred',
            'active': false
        }, {
            'id': 3,
            'user': 'pebbles',
            'active': true
        }];
        var result = helper.indexify(data, 'id', 'user');
        expect(result).to.deep.equal({
            '1': 'barney',
            '2': 'fred',
            '3': 'pebbles'
        });
    });
});