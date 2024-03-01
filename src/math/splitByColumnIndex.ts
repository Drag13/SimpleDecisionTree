export function splitByColumnIndex(
  dataset: string[][],
  index: number
): Map<string, string[][]> {
  const map = new Map<string, string[][]>();
  for (let i = 0; i < dataset.length; i++) {
    const row = dataset[i];
    const key = row[index];

    const subs = map.get(key) ?? [];
    subs.push(row);
    map.set(key, subs);
  }
  return map;
}
