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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback)  {
  // console.log('array: ', array);
  // console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
  }
  return results;
};

const arr = [1, 3, 5, 7, 9];
console.log(map(arr, num => num * 2));

// const results1 = map(words, word => word[0]);
console.log(map(words, word => word[0]));
// console.log(results1);

assertArraysEqual(map(arr, num => num * 2), [ 2, 6, 10, 14, 18 ]);
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);