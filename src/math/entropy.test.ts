import { calculateEntropy } from "./entropy";

test(`For the same values, entropy should be 0`, () => {
  const DATA = ["1", "1", "1"];
  expect(calculateEntropy(DATA, DATA[0])).toBe(0);
});

test(`For the 1,1,2,2 values, entropy should be 1`, () => {
  const DATA = ["1", "1", "2", "2"];
  expect(calculateEntropy(DATA, DATA[0])).toBe(1);
});

test(`For the given values, entropy should be "0.94`, () => {
  const DATA = [
    "NO",
    "NO",
    "YES",
    "YES",
    "YES",
    "NO",
    "YES",
    "NO",
    "YES",
    "YES",
    "YES",
    "YES",
    "YES",
    "NO",
  ];
  const columnEntropy = calculateEntropy(DATA, DATA[0]);
  expect(columnEntropy.toFixed(2)).toBe("0.94");
});
