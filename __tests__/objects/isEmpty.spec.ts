import { isEmpty } from '../../src';

test('test a non-object', () => {
  expect(() => isEmpty(27)).toThrow();
});

test('test an empty object', () => {
  expect(isEmpty({})).toBe(true);
});

test('test an empty object, which has only inherited attributes', () => {
  expect(isEmpty(Object.create({ a: 1 }))).toBe(true);
});

test('test a non empty object', () => {
  expect(isEmpty({ a: 1 })).toBe(false);
});
