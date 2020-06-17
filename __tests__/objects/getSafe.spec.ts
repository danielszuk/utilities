import { getSafe } from '../../src';

test("Get simple object's property", () => {
  const obj = { a: 1, b: 2 };
  expect(getSafe(() => obj.a)).toBe(1);

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  expect(getSafe(() => obj.c)).toBe(undefined);
});

test("Get complex object's property", () => {
  const obj = { a: 1, b: { ba: 21 } };
  expect(getSafe(() => obj.b.ba)).toBe(21);

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  expect(getSafe(() => obj.c.ca)).toBe(undefined);

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  expect(getSafe(() => obj.c.ca.caa)).toBe(undefined);
});
