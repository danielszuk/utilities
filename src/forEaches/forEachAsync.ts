/**
 * Executes a provided async function asynchronously once for each array element (same as the javascript's built in forEach,
 * but this is awaitable).
 *
 * @param array - iterates over the elements of the array
 * @param fn - runs the function once for all the array elements asynchronously.
 */
export const forEachAsync = <T>(
  array: T[],
  fn: (element: T) => Promise<void>,
) => {
  const fn$Array: Promise<void>[] = [];
  array.forEach((element) => fn$Array.push(fn(element)));
  return Promise.all(fn$Array);
};
