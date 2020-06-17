import { isEquivalent } from './isEquivalent';

test('non-objects equality', () => {
  expect(() => isEquivalent({ a: 1 }, 'a')).toThrow();
});

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

test('Two different objects equality', () => {
  // reference
  expect(isEquivalent({ a: 1 }, { a: 1 })).toBe(true);

  expect(isEquivalent({ a: 1 }, { a: 2 })).toBe(false);
  expect(isEquivalent({ a: 1 }, { a: '1' })).toBe(false);
  expect(isEquivalent({ a: 1, b: 2 }, { a: 1 })).toBe(false);
  expect(
    isEquivalent(
      { a: 1, b: { ba: 21, bb: 22 } },
      { a: 1, b: { ba: 21, bb: 41 } },
    ),
  ).toBe(false);
});
