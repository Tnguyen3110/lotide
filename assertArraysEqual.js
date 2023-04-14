const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;