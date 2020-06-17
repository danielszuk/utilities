/**
 * Removes elements from an array. Modify the original array.
 *
 * @param array to modify
 * @param elements to remove from the array
 */
export default function removeElements<T>(array: T[], ...elements: T[]): T[] {
  elements.forEach((element) => {
    const index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
    }
  });

  return array;
}
