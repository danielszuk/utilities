/**
 * Executes a provided function once for each array element (same as the javascript's built in forEach,
 * but this is breakable). Optionally you can break out of the iteration at any element.
 *
 * @param array - iterates over the elements of the array
 * @param fn - runs the function once for all the array elements from the beginning.
 * You can break out of the iteration by returns false in this function.
 */
export const forEach = async <T>(array: T[], fn: (element: T) => false | undefined | void): Promise<void> => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (fn(array[i]) === false) {
      break;
    }
  }
};

/**
 * Executes a provided function once for each array element (same as the javascript's built in forEach,
 * but this is breakable). Optionally you can break out of the iteration at any element.
 *
 * @param array - iterates Backward over the elements of the array
 * @param fn - runs the function once for all the array elements from the end.
 * You can break out of the iteration by returns false in this function
 */
export const forEachBackward = async <T>(array: T[], fn: (element: T) => false | undefined | void): Promise<void> => {
  for (let i = array.length - 1; 0 <= i; i--) {
    if (fn(array[i]) === false) {
      break;
    }
  }
};
