import { forEachAsync } from './forEachAsync';
import { timeout } from '../timeout';

test('Iterates over the array', () => {
  const array = [1, 2, 3];

  // reference
  let sum = 0;
  array.forEach((element) => (sum += element));
  expect(sum).toBe(6);

  sum = 0;
  forEachAsync(array, async (element) => {
    sum += element;
  });
  expect(sum).toBe(6);
});

test('Iteration is awaitable', async () => {
  const array = [1, 2, 3];
  let summable: boolean, sum: number;
  const summarizer = async (element: number) => {
    await timeout(0); // delay the execution until the next tick
    if (summable) sum += element;
  };

  // reference
  summable = true;
  sum = 0;
  array.forEach(summarizer);
  summable = false; // executes BEFORE summarizers (they delayed)
  await timeout(0); // wait for the next tick (summarizers execution)
  expect(sum).toBe(0);

  // reference
  summable = true;
  sum = 0;
  forEachAsync(array, summarizer);
  summable = false; // executes BEFORE summarizers (they delayed)
  await timeout(0); // wait for the next tick (summarizers execution)
  expect(sum).toBe(0);

  summable = true;
  sum = 0;
  await forEachAsync(array, summarizer);
  summable = false; // executes AFTER summarizers (they delayed, but awaited)
  await timeout(0);
  expect(sum).toBe(6);
});
