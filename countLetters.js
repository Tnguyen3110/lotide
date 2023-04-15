const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  //initiate an empty object to store the result
  const result = {}; // a: 1
  for (const letter of string) {
    if (letter !== " ") {
      //if the object already has letter, add 1 more time
      if (result[letter]) {
        result[letter] += 1;
        //if object does not have letter, add 1
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters("Weather"));

console.log(countLetters("Lighthouse Lab"));

const result1 = countLetters("ABC");

assertEqual(result1["A"], 1)

/** 
const a = {};

a['animal'] = 'dog';

console.log(a)
*/