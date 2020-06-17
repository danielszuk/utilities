import { clone } from '../../src';

test('Clone a non-object', () => {
  const value = 5;
  const valueCloned = clone(value);
  expect(value === valueCloned).toBe(true);
});

const simpleOriginal = { a: 1, b: 2 };
const simpleReference = simpleOriginal;
const simpleCloned = clone(simpleOriginal);

test('Simple: Cloned object is not the same as original object', () => {
  expect(simpleOriginal === simpleReference).toBe(true);
  expect(simpleOriginal === simpleCloned).toBe(false);
});

test('Simple: Modifying the original object does not affect the cloned object', () => {
  simpleOriginal.b = 27;
  expect(simpleReference.b).toBe(27);
  expect(simpleCloned.b).toBe(2);
});

const complexOriginal = { a: 1, b: { ba: 21, bb: 22 } };
const complexReference = complexOriginal;
const complexCloned = clone(complexOriginal);

test('Complex: Cloned object is not the same as original object', () => {
  expect(complexOriginal === complexReference).toBe(true);
  expect(complexOriginal === complexCloned).toBe(false);
  expect(complexOriginal.b === complexReference.b).toBe(true);
  expect(complexOriginal.b === complexCloned.b).toBe(false);
});

test('Complex: Modifying the original object does not affect the cloned object', () => {
  complexOriginal.a = 27;
  expect(complexReference.a).toBe(27);
  expect(complexCloned.a).toBe(1);
  complexOriginal.b.ba = 42;
  expect(complexReference.b.ba).toBe(42);
  expect(complexCloned.b.ba).toBe(21);
});
