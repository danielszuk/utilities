/**
 * Delay the execution for a specified number of milliseconds.
 *
 * @param ms - the number of milliseconds to wait before continue the execution
 */
export const timeout = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
