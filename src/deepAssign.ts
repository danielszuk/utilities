import { DeepPartial } from './types/DeepPartial';

/**
 * Assign an object into a target object, value by value deeply.
 *
 * @param target No matter if it is a plain or a nested object, only the attributes assigned which are directly
 * presented in the toBeAssigned, others will intact.
 * @param toBeAssigned attributes values will be assigned to the target.
 */
export const deepAssign = <T>(target: T, toBeAssigned: DeepPartial<T>): void => {
  if (typeof target !== 'object' || typeof toBeAssigned !== 'object') {
    throw new Error('deepAssign is only callable on objects.');
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
};
