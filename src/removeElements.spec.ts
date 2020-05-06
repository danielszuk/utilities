import { removeElements } from './removeElements';

test('remove an element from an array', () => {
  const ar = [1, 2, 3];
  removeElements(ar, 2);
  expect(ar.length).toBe(2);
  expect(ar[0]).toBe(1);
  expect(ar[1]).toBe(3);
});

test('remove more elements from an array', () => {
  const ar = [1, 2, 3];
  removeElements(ar, 1, 3);
  expect(ar.length).toBe(1);
  expect(ar[0]).toBe(2);
});
