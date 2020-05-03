/**
 * Iterates over an array and executes the function synchronously (unlike the javascript's built in forEach, which runs
 * asynchronously). Optionally you can break out of the iteration at any element.
 *
 * @param array - iterates over the elements of the array
 * @param fn - runs the function for all the elements of the array synchronously from the beginning.
 * You can break out of the iteration by returns false in the function.
 */
export const forEachSync = <T>(array: T[], fn: (element: T) => false | void): void => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (fn(array[i]) === false) {
      break;
    }
  }
};

/**
 * Iterates over an array Backward and executes the function synchronously (unlike the javascript's built in forEach,
 * which runs asynchronously). Optionally you can break out of the iteration at any element.
 *
 * @param array - iterates over the elements of the array
 * @param fn - runs the function for all the elements of the array synchronously from the end.
 * You can break out of the iteration by returns false in the function.
 */
export const forEachSyncBackward = <T>(array: T[], fn: (element: T | any) => false | void): void => {
  for (let i = array.length - 1; 0 <= i; i--) {
    if (fn(array[i]) === false) {
      break;
    }
  }
};
