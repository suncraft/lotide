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
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countOnly: countOnly,
  findKey: findKey,
  map: map,
  without: without,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  takeUntil: takeUntil,
  countLetters: countLetters,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions
};

