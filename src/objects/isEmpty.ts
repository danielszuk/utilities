/**
 * Determines whether an object is empty or not.
 *
 * @returns false is object is not empty, true if empty
 */
export const isEmpty = (object: any): boolean => {
  if (typeof object !== 'object') {
    throw new Error('isEmpty can be executed only on object.');
  }

  return !Object.values(object).length;
};
