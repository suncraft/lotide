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

const takeUntil = function(array, callback) {
  // ...
  let result = [];
  for (let i = 0; i <= array.length; i++) {
    if (callback(array[i]) === true) {
      break;
    } else {
      result.push(array[i]);
    }
  }
  return result;
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

// output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]