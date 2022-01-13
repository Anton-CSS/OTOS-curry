export const curryFunction = (
  fn: (...args: Array<number>) => number
): ((...args: Array<number>) => any) =>
  function additionalFunc(...args: number[]): number | (() => any) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...args2: number[]) {
      return additionalFunc(...args.concat(args2));
    };
  };
