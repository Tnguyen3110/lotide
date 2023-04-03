const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 
      for (const key in object1) { 
      const object2Value = object2[key];

      if (object2Value === undefined) { 
        return false;
      } 

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false
        } 
      }
    } 
    return true
  }


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};
  