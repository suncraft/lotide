

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



module.exports = eqArrays;