'use strict';

var expect = require('chai').expect;
var helper = require('../index.js');
describe('#IndexifyArray', function() {
  it('should convert array to json object by attribute', function() {
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
    var result = helper.indexifyArray(data, 'id');
    expect(result).to.deep.equal({
      '1': {
        id: 1,
        user: 'barney',
        active: false
      },
      '2': {
        id: 2,
        user: 'fred',
        active: false
      },
      '3': {
        id: 3,
        user: 'pebbles',
        active: true
      }
    });
  });
});
