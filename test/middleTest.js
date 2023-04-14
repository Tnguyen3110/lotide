const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [0, 9] for [6, 8, 0, 9, 5, 10]", () => {
    assert.deepEqual(middle([6, 8, 0, "cat", "dog", "purple"]), [0, "cat"]);
  });

  it("returns [0] for [6, 8, 0, 18, 5]", () => {
    assert.deepEqual(middle([6, 8, 0, 18, 5]), [0]);
  });

});