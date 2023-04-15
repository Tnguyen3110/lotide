const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  }
  //check the case when array length is odd
  else if (array.length % 2 !== 0) {
    let middleElement = [];
    //take the element in the middle
    middleElement.push(array[(array.length - 1) / 2]);
    return middleElement;
  }
  //the case when array length is even
  else if (array.length % 2 === 0) {
    let middleElement = [];
    //take 2 elements in the middle by accessing their positions
    middleElement.push(array[array.length / 2 - 1]);
    middleElement.push(array[(array.length) / 2]);
    return middleElement;
  }
};

module.exports = middle;

