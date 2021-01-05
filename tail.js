const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👊 👀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// let newArr = [];
const tail = function(arr) {
  let newArr = [];
  newArr = arr.slice(1);
  // return console.log(newArr.slice(1));
  return console.log(newArr);
};


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!