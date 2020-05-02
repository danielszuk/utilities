# Utilities
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