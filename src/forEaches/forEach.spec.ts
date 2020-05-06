import { forEach, forEachBackward } from './forEach';

test('Iterates over an array', async () => {
  const array = [1, 2, 3, 4];
  let sum: number;
  const summarizer = (element: number) => {
    sum += element;
  };

  // reference
  sum = 0;
  array.forEach(summarizer);
  expect(sum).toBe(10);

  sum = 0;
  await forEach(array, summarizer);
  expect(sum).toBe(10);

  sum = 0;
  await forEachBackward(array, summarizer);
  expect(sum).toBe(10);
});

test('Breaks the iteration', async () => {
  const array = [1, 2, 3, 4];
  let sum: number;
  const summarizer = (element: number) => {
    if (element === 3) return false;
    else sum += element;
  };

  sum = 0;
  await forEach(array, summarizer);
  expect(sum).toBe(3);

  sum = 0;
  await forEachBackward(array, summarizer);
  expect(sum).toBe(4);
});
