/**
 * Creates a new object from the given one with the exact same values, but without the reference.
 *
 * @param object The original object to be cloned
 * @returns a new object with the same attributes and corresponding values, but without the reference to the original object
 */
export default function clone<T>(object: T): T {
  if (!object || typeof object !== 'object') {
    return object;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const newObject = new object.constructor();

  // eslint-disable-next-line no-restricted-syntax
  for (const attribute in object) {
    if (typeof object[attribute] === 'object') {
      newObject[attribute] = clone(object[attribute]);
    } else {
      newObject[attribute] = object[attribute];
    }
  }

  return newObject;
}
