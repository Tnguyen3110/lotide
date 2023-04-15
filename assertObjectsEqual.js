//Define a function to compare two objects
const eqObjects = function(object1, object2) {
  //compare the length of two objects
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //loop through the key in object1 to compare with keys in object2
  for (const key in object1) { // a. 
    const object2Value = object2[key];

    if (object2Value === undefined) { // value for object2 (with the key) is undefined // b // checking that the keys of object 1 and object 2 are the same. 
      return false;
    }

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
  }
  return true;
};



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};
