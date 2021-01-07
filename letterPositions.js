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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`👊 👀  Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") { // the !== makes so much sense...
      if (results[sentence[i]]) {
        results[sentence[i]].push(i); // add current i value to index
      } else {
        results[sentence[i]] = [i] // create 0 index
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("this is a thing"));

assertArraysEqual(letterPositions("hello").e, [1]);