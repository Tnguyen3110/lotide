const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const result = {}; // a: 1
  for (const letter of string) {
    // letter = 'a'
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] = result[letter] + 1
      } else {
        result[letter] = 1
      }
    }
  }
  return result
}

console.log(countLetters("Weather"))

console.log(countLetters("Lighthouse Lab"))

const a = {};

a['animal'] = 'dog';

console.log(a)