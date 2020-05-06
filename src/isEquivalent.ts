/**
 * Determines whether two objects are equivalent (means all their properties values are the same).
 *
 * @returns true if objects are equivalent, false if they are not
 */
export const isEquivalent = (obj1: any, obj2: any) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    throw new Error('isEmpty can be executed only by objects.');
  }

  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  // If number of properties is different, objects are not equivalent
  if (obj1Props.length !== obj2Props.length) {
    return false;
  }

  for (let i = 0; i < obj1Props.length; i++) {
    const propName = obj1Props[i];

    if (typeof obj1[propName] !== typeof obj2[propName]) {
      // If type of values of same property are different, objects are not equivalent
      return false;
    } else if (typeof obj1[propName] === 'object') {
      if (!isEquivalent(obj1[propName], obj2[propName])) {
        // If object values of same property are not equal, objects are not equivalent
        return false;
      }
    } else if (obj1[propName] !== obj2[propName]) {
      // If values of same property are not equal, objects are not equivalent
      return false;
    }
  }

  // If we made it this far, objects are considered equivalent
  return true;
};
