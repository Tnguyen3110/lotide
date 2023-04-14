const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return []
  } 
  else if (array.length % 2 !== 0) {
    let middleElement = [];
    middleElement.push(array[(array.length - 1)/2]);
    return middleElement;
  }
  else if (array.length % 2 === 0) {
    let middleElement = [];
    middleElement.push(array[array.length/2 - 1])
    middleElement.push(array[(array.length)/2])
    return middleElement;
  }
}

module.exports = middle;

