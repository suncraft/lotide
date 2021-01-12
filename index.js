// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual   = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const map = require('./map');
const without = require('./without');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');
const countLetters = require('./countLetters');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countOnly,
  findKey,
  map,
  without,
  eqArrays,
  eqObjects,
  takeUntil,
  countLetters,
  findKeyByValue,
  letterPositions
};

