/**
 * Strict type checking a single value (unlike built in typescript 'as' operator,
 * which handles all the interface attributes optional)
 */
export default function as<T>(value: T) {
  return value;
}
