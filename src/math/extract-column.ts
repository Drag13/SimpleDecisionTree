export function extractColumn(dataset: string[][], index: number) {
  return dataset.map((row) => row[index]);
}
