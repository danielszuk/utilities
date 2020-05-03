/**
 * Generates a random boolean value.
 *
 * @returns a true or a false with equal probability
 */
export const randomBoolean: () => boolean = () => Math.random() >= 0.5;
