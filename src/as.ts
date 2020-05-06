/**
 * Strict type checking a single value (unlike built in typescript 'as' operator,
 * which handles all the interface attributes optional)
 */
export const as = <T>(value: T) => value;
