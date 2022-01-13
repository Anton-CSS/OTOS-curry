import { curryFunction } from "./hof";

describe("curryFunction", () => {
  let func: (...args: Array<number>) => number;
  beforeEach(() => {
    func = (a: number, b: number, c: number, d: number, e: number): number =>
      a + b + c + d + e;
  });
  it("curryFunction is function", () => {
    expect(curryFunction).toBeInstanceOf(Function);
  });

  it("curryFunction returned a function", () => {
    const result = curryFunction(func);
    expect(result).toBeInstanceOf(Function);
  });

  it("curryFunction returned a function", () => {
    const result = curryFunction(func);
    expect(result).toBeInstanceOf(Function);
  });

  it("curryFunction returned a function", () => {
    const hof = curryFunction(func);
    expect(hof(1, 2, 3, 4, 5)).toBe(15);
    expect(hof(2, 3, 4)(5, 6)).toBe(20);
    expect(hof(3, 4)(5, 6)(7)).toBe(25);
    expect(hof(4, 5)(6)(7, 8)).toBe(30);
    expect(hof(5)(6)(7)(8)(9)).toBe(35);
  });
});
