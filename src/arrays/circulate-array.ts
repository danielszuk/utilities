/**
 * Circulates over the elements of an array.
 *
 * @param array
 * @param [startIndex = 0] Beginning the circulation from this index
 * @returns a callable function which always returns with the next element of the array
 */
export default function circulateArray<T>(array: T[], startIndex = 0): () => T {
  const { length } = array;
  let index = startIndex;

  return () => {
    if (index >= length || index < 0) {
      index = 0; // if index is invalid, default is the first element
    }

    index += 1;
    return array[index - 1];
  };
}
