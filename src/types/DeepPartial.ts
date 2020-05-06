/**
 * Makes all attributes optional and all its nested object's attributes optional as well (same as Partial<T>
 * but goes deeper).
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
