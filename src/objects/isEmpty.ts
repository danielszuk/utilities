/**
 * Determines whether an object is empty or not.
 *
 * @returns false is object is not empty, true if empty
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isEmpty(object: any): boolean {
  if (typeof object !== 'object') {
    throw new Error('isEmpty can be executed only on object.');
  }

  return !Object.values(object).length;
}
