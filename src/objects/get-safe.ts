/**
 * Executes a getter and returns with the value. If the execution runs on error, returns with undefined.
 *
 * @param getter - getter function
 * @returns the value of the getter or undefined if the execution throws error
 */
export default function getSafe<T>(getter: () => T): T | undefined {
  try {
    return getter();
  } catch (e) {
    return undefined;
  }
}
