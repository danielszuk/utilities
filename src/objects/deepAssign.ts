import { DeepPartial } from '../types/DeepPartial';

/**
 * Assign an object's values into a target object, value by value deeply (unlike the javascript's built in
 * Object.assign(), which does not work for nested objects). Modify the original object.
 *
 * @param target No matter if it is a plain or a nested object, only the attributes assigned which are directly
 * presented in the toBeAssigned, others will intact.
 * @param toBeAssigned attributes values will be assigned to the target.
 */
export default function deepAssign<T>(
  target: T,
  toBeAssigned: DeepPartial<T>
): T {
  if (typeof target !== 'object' || typeof toBeAssigned !== 'object') {
    throw new Error('deepAssign can be executed only by objects.');
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const [Key, Value] of Object.entries(toBeAssigned)) {
    const key = Key as Extract<keyof T, string>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const value = Value as any;
    if (typeof value === 'object' && typeof target[key] === 'object') {
      deepAssign(target[key], value);
    } else {
      // eslint-disable-next-line no-param-reassign
      target[key] = value;
    }
  }

  return target;
}
