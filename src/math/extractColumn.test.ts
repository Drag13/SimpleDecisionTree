import { extractColumn } from "./extractColumn";

test(`Extract column should correctly extract data from matrix`, () => {
  const testData = [
    ["1", "2"],
    ["1-1", "2-1"],
  ];
  const firstColumn = extractColumn(testData, 0);
  expect(firstColumn).toMatchObject(["1", "1-1"]);
});
