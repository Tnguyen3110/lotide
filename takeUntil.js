const takeUntil = function(array, callback) {
  let result = [];
  for (item of array) {
    //run callback on each item
    let value = callback(item);
    //take the falsy values
    if (!value) {
      result.push(item);
    }
    //stop taking if the value is true
    else {
      return result;
    }
  }
  return result;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

const data3 = [1, 3, 5, 7, 8];

assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood']);

assertArraysEqual(takeUntil(data3, x => x > 3), [1, 3]);


