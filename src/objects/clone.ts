/**
 * Creates a new object from the given one with the exact same values, but without the reference.
 *
 * @param object The original object to be cloned
 * @returns a new object with the same attributes and corresponding values, but without the reference to the original object
 */
export const clone = <T>(object: T): T => {
  if (!object || typeof object !== 'object') {
    return object;
  }

  // @ts-ignore
  const newObject = new object.constructor();

  for (const attribute in object) {
    if (typeof object[attribute] === 'object') {
      newObject[attribute] = clone(object[attribute]);
    } else {
      newObject[attribute] = object[attribute];
    }
  }

  return newObject;
};
