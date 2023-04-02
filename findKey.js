const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  const keys = Object.keys(object); 
  for (let key of keys) {
    //run callback function on each value of the key of the object
  let value = callback(object[key]);
    if (value === true) {
    return key;
    }
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))

const object1 = {
  name: "Surrey",
  age: 24,
  location: "ABC"
}

assertEqual(findKey(object1, x => x === "Surrey"), "name");

const object2 = {
  A: 0,
  B: 2,
  C: 4,
  D:3
}

assertEqual(findKey(object2, x => x % 2 === 0), "B")