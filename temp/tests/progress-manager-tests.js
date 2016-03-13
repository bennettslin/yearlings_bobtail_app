var assert = require('assert');
describe('String#split', function() {
    it('Should return an array.', function() {
        assert(Array.isArray('a,b,c'.split(',')));
    });

    it('Should return the same array.', function() {
        assert.equal(['a', 'b', 'c'].length, 'a,b,c,d'.split(',').length, 'Arrays are unequal length.');
    });


});