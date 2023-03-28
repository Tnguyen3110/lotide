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

const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return []
  } 
  else if (array.length % 2 !== 0) {
    let middleElement = [];
    middleElement.push(array[(array.length - 1)/2]);
    return middleElement;
  }
  else if (array.length % 2 === 0) {
    let middleElement = [];
    middleElement.push(array[array.length/2 - 1])
    middleElement.push(array[(array.length)/2])
    return middleElement;
  }
}


console.log(middle([1, 2]))
console.log(middle([1, 2, 4, 6, 7, 9]))
assertArraysEqual(middle([6, 8, 0, "cat", "dog", "purple"]), [0, "cat"])
assertArraysEqual(middle([6, 8, 0, "cat", "purple"]), [0])