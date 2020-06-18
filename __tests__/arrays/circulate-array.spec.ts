import { circulateArray } from '../../src';

test('circulate an array', () => {
  const ar = [1, 2, 3];
  const next = circulateArray(ar);
  expect(next()).toBe(1);
  expect(next()).toBe(2);
  expect(next()).toBe(3);
  expect(next()).toBe(1);
  expect(next()).toBe(2);
});

test('circulate starting from the middle', () => {
  const ar = [1, 2, 3, 4];
  const next = circulateArray(ar, 2);
  expect(next()).toBe(3);
  expect(next()).toBe(4);
  expect(next()).toBe(1);
  expect(next()).toBe(2);
  expect(next()).toBe(3);
});

test('circulate with invalid starting index', () => {
  const ar = [1, 2, 3, 4];
  const next = circulateArray(ar, 27);
  expect(next()).toBe(1); // expect to start from the beginning
});

test('circulate an empty array', () => {
  const ar: number[] = [];
  const next = circulateArray(ar);
  expect(next()).toBe(undefined);
  expect(next()).toBe(undefined);
  expect(next()).toBe(undefined);
});
