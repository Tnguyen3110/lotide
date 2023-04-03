const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = ["take", "me", "to", "hhsuh"];
const arr3 = ["turn", "around"];


assertArraysEqual(map(arr1, x => x*2), [2, 4, 6, 8, 10, 12]); 
assertArraysEqual(map(arr2, word => word[1]), ["a", "e", "o", "h"]);

assertArraysEqual(map(arr3, word => word[0]), ["t", "o", "h"]);




