const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👊 👀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  let keyFound = undefined;
  for (let key in obj) {
    if (callback(obj[key]) === true) {
      keyFound = key;
      return keyFound;
      // break;
    }
  }
  return keyFound;
}

// const findKeyByValue = function(myObj, value) {
//   for (let key in myObj) {
//     if (myObj[key] === value) {
//       return key;
//     }
//   }
// };

// let test1 = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }

// console.log(test1.noma);
// test1["name"] = { stars: 4 };
// console.log(test1);

// // console.log(findKey(test1, x => x.stars === 2)); // => "noma"
// console.log(assertEqual(findKey(test1, x => x.stars === 2), "noma"));

// // console.log(findKey({}, x => x.stars === 3)); // => undefined
// console.log(assertEqual(findKey({}, x => x.stars === 3), undefined));

module.exports = findKey;