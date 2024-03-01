import { DTree } from "./tree";

const TEST_DATA = [
  ["OUTLOOK", "TEMPERATURE", "HUMIDITY", "WIND", "PLAY"],
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

test(`For the real data Tree should predict correct values`, () => {
  const REAL_DATA = ["SUNNY", "COOL", "HIGH", "STRONG"];
  const tree = new DTree();
  tree.train(TEST_DATA);
  const prediction = tree.predict(REAL_DATA);
  expect(prediction.decision).toBe("NO");
});
