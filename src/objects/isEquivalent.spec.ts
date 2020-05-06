import { isEquivalent } from './isEquivalent';

test('Two simple objects equality', () => {
  const obj1 = { a: 1 };
  const obj2 = { a: 1 };

  // reference
  expect(obj1 === obj2).toBe(false);

  expect(isEquivalent(obj1, obj2)).toBe(true);
});

test('Two complex objects equality', () => {
  const obj1 = { a: 1, b: { ba: 21, bb: 22 } };
  const obj2 = { a: 1, b: { ba: 21, bb: 22 } };

  // reference
  expect(obj1 === obj2).toBe(false);

  expect(isEquivalent(obj1, obj2)).toBe(true);
});
