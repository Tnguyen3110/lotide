const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    //return the first element of the array
    return array[0];
  }
};

module.exports = head;
