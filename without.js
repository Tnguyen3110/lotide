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

const without = function(source, itemsToRemove) {
  for (let i of itemsToRemove) {
    let index = source.indexOf(i);
    const array1 = source.slice(0, index);
    const array2 = source.slice(index + 1);
    source = array1.concat(array2);
  }
  return source
}

console.log(without([1, 2, 3], [1]));
console.log(without([4, 2, 5, 3], [2, 3]));

assertArraysEqual(without([4, 2, 5, 3], [2, 3]), [4, 5]);

