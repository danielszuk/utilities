import { deepAssign } from './deepAssign';

test('Try assign a non-object', () => {
  // @ts-ignore
  expect(() => deepAssign({ a: 1, b: 2, c: 3 }, 'a')).toThrow();
});

test('Assign a simple value', () => {
  const target = { a: 1, b: 2, c: 3 };
  deepAssign(target, { b: 27, c: 42 });

  expect(Object.keys(target).length).toBe(3);
  expect(target.a).toBe(1);
  expect(target.b).toBe(27);
  expect(target.c).toBe(42);
});

test('Assign nested object into nested object', () => {
  const target = { a: 1, b: { ba: 21, bb: 22, bc: 23 } };
  deepAssign(target, { b: { ba: 27, bc: 42 } });

  expect(Object.keys(target).length).toBe(2);
  expect(Object.keys(target.b).length).toBe(3);
  expect(target.a).toBe(1);
  expect(target.b.ba).toBe(27);
  expect(target.b.bb).toBe(22);
  expect(target.b.bc).toBe(42);
});
