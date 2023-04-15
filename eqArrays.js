function eqArrays(arr1, arr2) {
  //check if length is equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  //check each item of array is equal

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;
