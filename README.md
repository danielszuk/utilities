# Utilities
[![npm package](https://img.shields.io/npm/v/npm-get-version.svg)](http://npmjs.org/package/npm-get-version)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Node.js CI](https://github.com/danielszuk/utilities/workflows/Node.js%20CI/badge.svg)
![David](https://img.shields.io/david/danielszuk/utilities)
![npm bundle size](https://img.shields.io/bundlephobia/min/@danielszuk/utilities)
[![Coverage Status](https://coveralls.io/repos/github/danielszuk/utilities/badge.svg?branch=master)](https://coveralls.io/github/danielszuk/utilities?branch=master)

Commonly used utilities for Typescript/Javascript projects.

## Installation
```shell script
npm install @danielszuk/utilities
```

## Usage
Always import **only the used** functions from the package.

### Typescript
```
import { degreeToRadian, randomBoolean, forEach } from '@danielszuk/utilities'

degreeToRadian(45);
// 0.785398

randomBoolean();
// true OR false

forEach([1,2,3], (number) => console.log(number));
// 1
// 2
// 3
```

### Javascript
```
const { degreeToRadian, randomBoolean, forEach } = require('@danielszuk/random-boolean');

degreeToRadian(45);
// 0.785398

randomBoolean();
// true OR false

forEach([1,2,3], (number) => console.log(number));
// 1
// 2
// 3
```

## List of available functions
For detailed description, check **the definition of the imported function** (either by your IDE, or from the source code).

For detailed examples, check the **corresponding *name.spec.ts* file in the *src/* folder**

| Name     |      Short Description      |  Example |
|:---------|:---------------------------|:---------|
| forEach | Executes a provided function once for each array element (breakable) | ```forEach([1,2,3], (element) => {if (element === 2) return false; }``` |
| forEachSync | Executes a provided async function synchronously once for each array element (breakable) | ```await forEachSync([1,2,3], async (element) => { await asyncFn(element); if (element === 2) return false; }``` |
| forEachAsync | Executes a provided async function asynchronously once for each array element (awaitable) | ```await forEachAsync([1,2,3], async (element) => { await asyncFn(element); }``` |
| clone | Creates a new object from the given one with the exact same values, but without the reference. | ```const obj2 = clone(obj1)``` |
| deepAssign | Assign an object's values into a target object, value by value deeply. | ```deepAssign({ a: 1, b: { ba: 21, bb: 22 } }, { b: { ba: 42 } }) // { a: 1, b: { ba: 42, bb: 22 } } ``` |
| getSafe | Executes a getter and returns with the value. If the execution runs on error, returns with undefined. | ```getSafe(() => result.attribute.value)``` |
| isEmpty | Determines whether an object is empty or not. | ```isEmpty({}) // true``` |
| isEquivalent | Determines whether two objects are equivalent (means all their properties values are the same). | ```isEquivalent({ a: 1 }, { a: 1 }) // true``` |
| degreeToRadian | Converts an angle in degree to radian. | ```degreeToRadian(30) // 0.5235987755982988``` |
| randomBoolean | Generates a random boolean value. | ```randomBoolean() // true OR false``` |
| removeElements | Removes elements from an array. Modify the original array. | ```removeElements([ 1, 2, 3 ], 2, 3) // [ 1 ]``` |
| round | Rounds a number to a given decimal place. | ```round(1.237, 2) // 1.24``` |
| timeout | Delay the execution for a specified number of milliseconds. | ```await timeout(1000)``` |
| as | Strict type checking a single value. | ```as<IExample>({ a: 1, b: 2 })``` |
| DeepPartial | Makes all attributes optional and all its nested object's attributes optional as well. | ```const toModify: DeepPartial<IExample>``` |
