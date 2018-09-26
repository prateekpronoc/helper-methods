'use strict';

var expect = require('chai').expect;
var helper = require('../index.js');
describe('#objectDifference', function() {
    it('should return json object', function() {
        var object1 = {
                'id': 1,
                'user': 'barney',
                'active': false
            },
            object2 = {
                'id': 2,
                'user': 'Prateek',
                'active': true
            },
            result = helper.objectDifference(object1, object2);
        expect(result).to.deep.equal({ 'id': 1, 'user': 'barney', 'active': false });
    });
});