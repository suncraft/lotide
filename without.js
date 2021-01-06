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

const without = function(source, itemsToRemove) {
  let newArr = [...source];
  // console.log(source);
  for (let i = 0; i < newArr.length; i++) {
    // console.log(newArr[i]);
    for (let j = 0; j < itemsToRemove[j]; j++) {
      // console.log(newArr[j]);
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice(i, 1);
      } 
    }
  }
  console.log("source = " + source);
  console.log("newArr = " + newArr);
  return newArr;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse~~~"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// console.log(words);



// const without = function(source, itemsToRemove) {
//   let newArr = source;
//   for (let i = 0; i < newArr.length; i++) {
//     if (eqArrays(newArr[i], itemsToRemove[i])) {

//     }
//   }
// };