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

const middle = function(arr) {
  let midIndex = [];
  if (arr.length < 2) {
    return midIndex;
  } else {
    if (arr.length % 2 === 0) {
      let x = (Math.floor(arr.length / 2) -1);
      let y = Math.floor(arr.length) / 2;
      midIndex.splice(0, 0, arr[x], arr[y]);
      // console.log("First middle index: " + x);
      // console.log("Second middle index: " + y);
      console.log(midIndex);

      return midIndex;
    } else {
      let x = Math.floor(arr.length / 2) + 1;
      midIndex.push(x);
      console.log(midIndex);
      return midIndex;
    }
  }
};


middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
