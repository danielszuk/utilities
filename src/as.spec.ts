import { as } from './as';

test('assigns interface', () => {
  interface ITest {
    a: number;
    b: number;
  }

  as<ITest>({ a: 1, b: 2 });
});
