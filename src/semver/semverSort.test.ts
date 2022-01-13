import { semverSort } from "./semverSort";

describe("semverSort", () => {
  it("semverSort is function", () => {
    expect(semverSort).toBeInstanceOf(Function);
  });
  it("semverSort return correct answer", () => {
    expect(
      semverSort([
        "1.0.5",
        "2.5.0",
        "0.12.0",
        "1",
        "1.23.45",
        "1.4.50",
        "1.2.3.4.5.6.7",
      ])
    ).toEqual([
      "0.12.0",
      "1",
      "1.0.5",
      "1.2.3.4.5.6.7",
      "1.4.50",
      "1.23.45",
      "2.5.0",
    ]);
  });

  it("semverSort return correct answer", () => {
    expect(
      semverSort([
        "3.0.5",
        "2.5.0",
        "0.12.0",
        "1",
        "1.23.45",
        "3.4.50",
        "1.2.3.4.5.6.7",
      ])
    ).toEqual([
      "0.12.0",
      "1",
      "1.2.3.4.5.6.7",
      "1.23.45",
      "2.5.0",
      "3.0.5",
      "3.4.50",
    ]);
  });
});
