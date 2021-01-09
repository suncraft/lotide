const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👊 👀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let truthyFalsy;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      truthyFalsy = true;
    } else {
      truthyFalsy = false;
    }
  }
  return truthyFalsy;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true
// console.log(ab.isArray);
// console.log(eqArrays(ab, ba));
// assertEqual(ab, ba);
// assertEqual(Object.keys(ab).length, Object.keys(ba).length);

const abc = { a: "1", b: "2", c: "3"};
// console.log(eqObjects(ab, abc)); // => false
// assertEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true **how can this be true???** test case was from discord chat

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false