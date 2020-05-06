/**
 * Determines whether an object is empty or not.
 *
 * @returns false is object is not empty, true if empty
 */
export const isEmpty = (object: any): boolean => {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};
