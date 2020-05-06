/**
 * Executes a provided async function synchronously once for each array element (unlike the javascript's built in forEach,
 * which runs asynchronously). Optionally you can break out of the iteration at any element.
 *
 * @param array - iterates over the elements of the array
 * @param fn - runs the function once for all the array elements synchronously from the beginning.
 * You can break out of the iteration by returns false in this function.
 */
export const forEachSync = async <T>(
  array: T[],
  fn: (element: T) => Promise<false | undefined | void>,
): Promise<void> => {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if ((await fn(array[i])) === false) {
      break;
    }
  }
};

/**
 * Executes a provided async function synchronously once for each array element (unlike the javascript's built in forEach,
 * which runs asynchronously). Optionally you can break out of the iteration at any element.
 *
 * @param array - iterates Backward over the elements of the array
 * @param fn - runs the function once for all the array elements synchronously from the end.
 * You can break out of the iteration by returns false in this function
 */
export const forEachSyncBackward = async <T>(
  array: T[],
  fn: (element: T) => Promise<false | undefined | void>,
): Promise<void> => {
  for (let i = array.length - 1; 0 <= i; i--) {
    if ((await fn(array[i])) === false) {
      break;
    }
  }
};
