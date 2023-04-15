# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kimanhbong/lotide`

**Require it:**

`const _ = require('@kimanhbong/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: compare two values it takes in and print out a message telling us if they match or not
* `head(array)`: returns the first item in the array
* `tail(array)`: returns items in the array except for the first item
* `countOnly(allItems, itemsToCount)`: The function should report back how many instances of each string were found in the allItems array of strings.
* `countLetters(sentence)`: return a count of each of the letters in that sentence
* `letterPositions(sentence)`: return all the indices (zero-based positions) in the string where each character is found
* `findKeyByValue(object, value)`:  scan the object and return the first key which contains the given value
* `eqObjects(object1, object2)`: compare two objects, return true if both objects have identical keys with identical values, otherwise false
* `assertObjectsEqual(actual, expected)`:  take in two objects and console.log an appropriate message to the console.
