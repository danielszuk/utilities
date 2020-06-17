import { forEachSync, forEachSyncBackward, timeout } from '../../src';

test('Iterates over an array', async () => {
  const array = [1, 2, 3, 4];
  let sum: number;
  const summarizer = async (element: number) => {
    sum += element;
  };

  // reference
  sum = 0;
  array.forEach(summarizer);
  expect(sum).toBe(10);

  sum = 0;
  await forEachSync(array, summarizer);
  expect(sum).toBe(10);

  sum = 0;
  await forEachSyncBackward(array, summarizer);
  expect(sum).toBe(10);
});

test('Breaks the iteration', async () => {
  const array = [1, 2, 3, 4];
  let sum: number;
  const summarizer = async (element: number) => {
    await timeout(0); // delay the execution until the next tick
    if (element === 3) return false;
    sum += element;
    return true;
  };

  sum = 0;
  await forEachSync(array, summarizer);
  expect(sum).toBe(3);

  sum = 0;
  await forEachSyncBackward(array, summarizer);
  expect(sum).toBe(4);
});
