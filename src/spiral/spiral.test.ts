import { spiral } from "./spiral";

describe("spiral", () => {
  it("spiral is function", () => {
    expect(spiral).toBeInstanceOf(Function);
  });
  it("spiral gives correct  answer", () => {
    expect(
      spiral([
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
      ])
    ).toStrictEqual([
      0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11,
    ]);
  });
  it("spiral give correct  answer", () => {
    expect(
      spiral([
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29],
      ])
    ).toStrictEqual([
      0, 1, 2, 3, 4, 9, 14, 19, 24, 29, 28, 27, 26, 25, 20, 15, 10, 5, 6, 7, 8,
      13, 18, 23, 22, 21, 16, 11, 12, 17,
    ]);
  });
});
