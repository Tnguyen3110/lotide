const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Lighthouse", "Lab", "Bootcamp"]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lab"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Bootcamp"); // ensure second element is "Labs"
