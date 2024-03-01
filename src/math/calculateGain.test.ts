import { calculateGain } from "./calculateGain";

test(`For the given matrix and 3rd row, gain should be 0.048`, () => {
  const TEST_DATA = [
    ["SUNNY", "HOT", "HIGH", "WEAK", "NO"],
    ["SUNNY", "HOT", "HIGH", "STRONG", "NO"],
    ["OVERCAST", "HOT", "HIGH", "WEAK", "YES"],
    ["RAIN", "MILD", "HIGH", "WEAK", "YES"],
    ["RAIN", "COOL", "NORMAL", "WEAK", "YES"],
    ["RAIN", "COOL", "NORMAL", "STRONG", "NO"],
    ["OVERCAST", "COOL", "NORMAL", "STRONG", "YES"],
    ["SUNNY", "MILD", "HIGH", "WEAK", "NO"],
    ["SUNNY", "COOL", "NORMAL", "WEAK", "YES"],
    ["RAIN", "MILD", "NORMAL", "WEAK", "YES"],
    ["SUNNY", "MILD", "NORMAL", "STRONG", "YES"],
    ["OVERCAST", "MILD", "HIGH", "STRONG", "YES"],
    ["OVERCAST", "HOT", "NORMAL", "WEAK", "YES"],
    ["RAIN", "MILD", "HIGH", "STRONG", "NO"],
  ];
  const gain = calculateGain(TEST_DATA, 3);
  expect(gain.toFixed(3)).toBe(`0.048`);
});

test(`For the given matrix and 1st row, gain should be 0.2467`, () => {
  const TEST_DATA = [
    ["SUNNY", "HOT", "HIGH", "WEAK", "NO"],
    ["SUNNY", "HOT", "HIGH", "STRONG", "NO"],
    ["OVERCAST", "HOT", "HIGH", "WEAK", "YES"],
    ["RAIN", "MILD", "HIGH", "WEAK", "YES"],
    ["RAIN", "COOL", "NORMAL", "WEAK", "YES"],
    ["RAIN", "COOL", "NORMAL", "STRONG", "NO"],
    ["OVERCAST", "COOL", "NORMAL", "STRONG", "YES"],
    ["SUNNY", "MILD", "HIGH", "WEAK", "NO"],
    ["SUNNY", "COOL", "NORMAL", "WEAK", "YES"],
    ["RAIN", "MILD", "NORMAL", "WEAK", "YES"],
    ["SUNNY", "MILD", "NORMAL", "STRONG", "YES"],
    ["OVERCAST", "MILD", "HIGH", "STRONG", "YES"],
    ["OVERCAST", "HOT", "NORMAL", "WEAK", "YES"],
    ["RAIN", "MILD", "HIGH", "STRONG", "NO"],
  ];
  const gain = calculateGain(TEST_DATA, 0);
  expect(gain.toFixed(4)).toBe(`0.2467`);
});
