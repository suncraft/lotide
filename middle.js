

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

module.exports = middle;