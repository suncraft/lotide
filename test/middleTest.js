const assert = require('chai').assert;
// const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


describe("Middle detects the center of an array", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6], because EVEN number of values in array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5], because ODD number of values in array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

});