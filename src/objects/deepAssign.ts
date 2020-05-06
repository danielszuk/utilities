import { DeepPartial } from '..';

/**
 * Assign an object's values into a target object, value by value deeply (unlike the javascript's built in
 * Object.assign(), which does not work for nested objects).
 *
 * @param target No matter if it is a plain or a nested object, only the attributes assigned which are directly
 * presented in the toBeAssigned, others will intact.
 * @param toBeAssigned attributes values will be assigned to the target.
 */
export const deepAssign = <T>(target: T, toBeAssigned: DeepPartial<T>): T => {
  if (typeof target !== 'object' || typeof toBeAssigned !== 'object') {
    throw new Error('deepAssign can be executed only by objects.');
  }

  for (const attribute in toBeAssigned) {
    if (!toBeAssigned.hasOwnProperty(attribute)) continue;

    if (typeof toBeAssigned[attribute] === 'object' && typeof target[attribute] === 'object') {
      deepAssign(target[attribute], toBeAssigned[attribute]!);
    } else {
      // @ts-ignore
      target[attribute] = toBeAssigned[attribute];
    }
  }

  return target;
};
