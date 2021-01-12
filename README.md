# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @suncraft/lotide`

**Require it:**

`const _ = require('@suncraft/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Receives and array and outputs index [0]
* `tail(array`: Receives and array and outputs everything after index [0]
* `middle(array)`: Receives and array and outputs the middle most values in an index
* `assertArraysEqual`: Returns assertions true or false for equal arrays.
* `assertEqual`: Returns true or false on two values if equal. 
* `assertObjectsEqual`: Returns assertions true or false for Objects.
* `countOnly`: Counts counts certain values from an array.
* `findKey`: Finds the key in an object based on its value. 
* `map()`: Takes some value from an array and creates a new array.
* `without`: Searches for a value inside an array and takes it out.
* `eqArrays`: Detects if arrays are equal. 
* `eqObjects`: Detects if object are equal. 
* `takeUntil`: Creates new array from an array till it meets a stopping point. 
* `countLetters`: Keeps track of how many letters are in a string. 
* `findKeyByValue(object)`: Searches an object and returning a key based on the value. 
* `letterPositions(string)`: Keeps track of what positions each letter is. 