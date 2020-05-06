import { timeout } from './timeout';

test('timeout awaited', async () => {
  const timeoutInMs = 1000;

  let startTime = new Date().getTime();
  let finishTime = new Date().getTime();
  expect(finishTime - startTime < timeoutInMs).toBe(true);

  startTime = new Date().getTime();
  await timeout(timeoutInMs);
  finishTime = new Date().getTime();
  expect(finishTime - startTime > timeoutInMs).toBe(true);
});
