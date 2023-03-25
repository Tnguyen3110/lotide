const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};
/*
const tail = arr => {
  if (arr.length < 1) {
    return [];
  }
  return arr.slice(1);
};
*/


const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};


const result = tail(["Lighthouse", "Lab", "Bootcamp"]);
console.log(result);


assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lab"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Bootcamp"); // ensure second element is "Labs"
