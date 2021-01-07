const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👊 👀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(myObj, value) {
  for (let key in myObj) {
    if (myObj[key] === value) {
      return key;
    }
  }
};

// Still need to learn Object.keys and looping with for.. of with it

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);