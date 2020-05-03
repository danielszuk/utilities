import { degreeToRadian } from './degreeToRadian';

test('Converts 0°', () => {
  expect(degreeToRadian(0)).toBe(0);
});

test('Converts 30°', () => {
  expect(degreeToRadian(30)).toBe(0.5235987755982988);
});

test('Converts 180°', () => {
  expect(degreeToRadian(180)).toBe(3.141592653589793);
});

test('Converts -45°', () => {
  expect(degreeToRadian(-45)).toBe(-0.7853981633974483);
});
