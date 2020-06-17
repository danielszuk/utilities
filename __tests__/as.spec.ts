import { as } from '../src';

test('assigns interface', () => {
  interface Test {
    a: number;
    b: number;
  }

  as<Test>({ a: 1, b: 2 });
});
