const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


//Define a function to compare two objects
const eqObjects = function (object1, object2) {
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
          return false
        } 
      }
    } 
    return true
  }


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject);

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject);

//compare two equal objects that have arrays
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),false);

