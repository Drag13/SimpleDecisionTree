import { getGroupedValues } from "./getGroupedValues";

test("For the given matrix, grouped values should be as expected", () => {
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

  const firstColumnStat = getGroupedValues(TEST_DATA, 0);

  expect(firstColumnStat).toMatchObject([
    ["NO", "NO", "NO", "YES", "YES"],
    ["YES", "YES", "YES", "YES"],
    ["YES", "YES", "NO", "YES", "NO"],
  ]);
});
