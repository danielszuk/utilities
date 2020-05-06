import { getSafe } from './getSafe';

test("Get simple object's property", () => {
  const obj: any = { a: 1, b: 2 };
  expect(getSafe(() => obj.a)).toBe(1);
  expect(getSafe(() => obj.c)).toBe(undefined);
});

test("Get complex object's property", () => {
  const obj: any = { a: 1, b: { ba: 21 } };
  expect(getSafe(() => obj.b.ba)).toBe(21);
  expect(getSafe(() => obj.c.ca)).toBe(undefined);
  expect(getSafe(() => obj.c.ca.caa)).toBe(undefined);
});
