/**
 * Generates a random boolean value.
 *
 * @returns a true or a false with equal probability
 */
export default function randomBoolean() {
  return Math.random() >= 0.5;
}
