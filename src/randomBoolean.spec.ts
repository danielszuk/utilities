import { randomBoolean } from './randomBoolean';

const mockMathRandom = (value: number) => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => value;
  global.Math = mockMath;
};

describe('Gives true or false with equal probability', () => {
  test('false for minimum: 0', () => {
    mockMathRandom(0);
    expect(randomBoolean()).toBe(false);
  });
  test('false for below 0.5', () => {
    mockMathRandom(0.499);
    expect(randomBoolean()).toBe(false);
  });
  test('true for 0.5', () => {
    mockMathRandom(0.5);
    expect(randomBoolean()).toBe(true);
  });
  test('true for maximum: 0.999', () => {
    mockMathRandom(0.999);
    expect(randomBoolean()).toBe(true);
  });
});
