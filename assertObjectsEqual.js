const eqObjects = function(object1, object2) {
  let result = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    result = false;
  } else {
    for (let keys of Object.keys(object1)) {
      if (object1[keys] !== object2[keys]) {
        result = false;
      }
    }
    for (let keys of Object.keys(object2)) {
      if (object1[keys] !== object2[keys]) {
        result = false;
      }
    }
    return result;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected) === true) {
    console.log(`👊 👀  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertObjectsEqual(ab, ba));

module.exports = assertObjectsEqual;