/**
 * Rounds a number to a given decimal place.
 *
 * @param num number to round
 * @param [decimals] the decimal place to round to
 */
export const round = (num: number, decimals?: number) => {
  const coefficient = Math.pow(10, decimals || 0);
  return Math.round((num + Number.EPSILON) * coefficient) / coefficient;
};
