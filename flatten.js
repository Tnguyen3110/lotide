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

function flatten(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let item of array[i]) {
        flattened.push(item);
      }
    }
    else {
      flattened.push(array[i]);
    }
  }
  return flattened;
}
console.log(flatten([[1, 2], 3, [4, 5], [9, 10, 12]]));


assertArraysEqual(flatten([[1, 2], 3, [4, 5], [9, 10, 12]]), [1, 2, 3, 4, 5, 9, 10, 12]);