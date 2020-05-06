import { isEmpty } from './isEmpty';

test('test an empty object', () => {
  expect(isEmpty({})).toBe(true);
});

test('test a non empty object', () => {
  expect(isEmpty({ a: 1 })).toBe(false);
});
