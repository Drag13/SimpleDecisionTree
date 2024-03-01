import { calculateEntropy } from "./entropy";
import { extractColumn } from "./extractColumn";
import { getGroupedValues } from "./getGroupedValues";

export function calculateGain(dataset: string[][], columnIndex: number) {
  const decisionColumn = extractColumn(dataset, dataset[0].length - 1);
  const decisionColumnEntropy = calculateEntropy(decisionColumn, "YES");
  const targetColumnStats = getGroupedValues(dataset, columnIndex);
  const length = dataset.length;
  const valueEntropy = targetColumnStats.reduce((acc, v) => {
    const singleEntropy = (v.length / length) * calculateEntropy(v, v[0]); //?
    return acc + singleEntropy;
  }, 0);
  return decisionColumnEntropy - valueEntropy;
}
