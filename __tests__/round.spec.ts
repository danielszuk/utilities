import { round } from '../src';

test('round to 2 decimals', () => {
  expect(round(1.237, 2)).toBe(1.24);
});

test('round to 2 decimals of *.005', () => {
  expect(round(287.005, 2)).toBe(287.01);
});

test('round to 5 decimals', () => {
  expect(round(3.237117, 5)).toBe(3.23712);
});

test('round without decimals', () => {
  expect(round(52.5, 0)).toBe(53);
  expect(round(52.5)).toBe(53);
});
