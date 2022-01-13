import sum from "./sum";

describe("sum", () => {
  it("sum is a function", () => {
    expect(sum).toBeInstanceOf(Function);
    expect(sum).toBeTruthy();
    expect(sum).not.toBeUndefined();
  });
  it("function sum without arguments return 0", () => {
    expect(sum().toString()).toBe(0);
  });

  it("sum return a function", () => {
    expect(sum()).toBeInstanceOf(Function);
  });

  it("The return function gives a correct answer", () => {
    const s = sum();
    expect(s(1).toString()).toBe(1);
    expect(s(1)(2).toString()).toBe(3);
    expect(s(3)(4)(5).toString()).toBe(12);
  });

  it("The return function with parameters gives a correct answer", () => {
    const s3 = sum(3);
    expect(s3(5).toString()).toBe(8);
    expect(s3(6).toString()).toBe(9);
  });
});
