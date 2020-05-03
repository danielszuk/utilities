import { forEachSync, forEachSyncBackward } from './forEachSync';

const array = [1, 2, 3, 4];

test('Iterates over an array', () => {
  let summary = 0;
  forEachSync(array, (element) => {
    summary += element;
  });
  expect(summary).toBe(10);

  summary = 0;
  forEachSyncBackward(array, (element) => {
    summary += element;
  });
  expect(summary).toBe(10);
});

test('Break the iteration', () => {
  let summary = 0;
  forEachSync(array, (element) => {
    if (element === 3) return false;
    else summary += element;
  });
  expect(summary).toBe(3);

  summary = 0;
  forEachSyncBackward(array, (element) => {
    if (element === 3) return false;
    else summary += element;
  });
  expect(summary).toBe(4);
});
