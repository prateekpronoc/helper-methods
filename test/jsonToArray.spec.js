'use strict';

var expect = require('chai').expect;
var helper = require('../index.js');
describe('#jsonToArray', function() {
    it('should convert json to array object by attributes', function() {
        var data = {
            'id': 1,
            'user': 'barney',
            'active': false
        };
        var result = helper.jsonToArray(data);
        expect(result).to.deep.equal([{
                'id': 1
            },
            { 'user': 'barney' },
            { 'active': false }
        ]);
    });
});