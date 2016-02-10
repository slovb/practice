const assert = require('assert');
const primefactors = require('../primefactors.js').primefactors;

function primetester(argument, expected) {
  it('should return [' + expected.toString() + '] when given ' + argument, function() {
    assert.deepEqual(expected, primefactors(argument));
  });
};

describe('primefactors', function() {
  primetester(1, []);
  primetester(2, [2]);
  primetester(3, [3]);
});

