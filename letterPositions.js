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


const letterPositions = function (sentence) {
  const results = {}
  /*
      results = {
      h : [0],
      e : [1],
      l : [2, 3],
      o : [4]

    }
    */
  // [h e l l o]
  for (let indx = 0; indx < sentence.split("").length; indx++) { // 0 1 2 3
       //for (let letter of sentence) {
    // index of the letter in the sentence
    if (results[sentence[indx]]) {// sentence[3] l , results[l] 
      // letter is already present
      results[sentence[indx]].push(indx);
    } else {
      // letter is not present
      // create / initalize a new array for the letter ,  results[h] = [0], results[e] = [1], results[l] = [2],
      let array = [indx];
      results[sentence[indx]] = array;
    }
  }
  console.log(results);
  return results
}





console.log(letterPositions("hi lighthouse"))

const result1 = letterPositions("hello");
/*
result1 = {
   h : [0],
   e : [1],
   l : [2, 3],
   o : [4]

}
*/

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);

/** 
const letterPositions = function (sentence) {
  const results = {};
  [...sentence].forEach((letter, index) => {
    if (letter === " ") 
      return
    // else if (letter in results) {
    //   results[letter].push(index)
    //   returns
    // } 
    
    results[letter] = letter in results 
        ? [...results[letter], index] 
        : [index]
  })
  return results;
}

*/