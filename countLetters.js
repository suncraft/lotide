const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👊 👀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔥🔥🔥 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const letterCounts = {};

  string = string.replace(/ /g, ''); // I forgot how to replace whitespace, thanks stackoverflow

  for (const letter of string) {
    if (letterCounts[letter]) {
      // this adds to letters already initialized
      letterCounts[letter] += 1;
    } else {
      // this initializes each letter in the object
      letterCounts[letter] = 1;
    }
  }
  return letterCounts;
};


// let ranString = "This chapter taught you how to write your own functions. The function keyword, when used as an expression, can create a function value. When used as a statement, it can be used to declare a binding and give it a function as its value. Arrow functions are yet another way to create functions.";

// console.log(countLetters(ranString));
// console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;