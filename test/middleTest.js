const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([6, 8, 0, "cat", "dog", "purple"]), [0, "cat"])
assertArraysEqual(middle([6, 8, 0, "cat", "purple"]), [0])