export function getGroupedValues(data: string[][], index: number) {
  const stats = new Map();
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const targetKey = row[index];
    const targetValue = row[row.length - 1];
    const values = stats.has(targetKey) ? stats.get(targetKey) : [];
    values.push(targetValue);
    stats.set(targetKey, values);
  }
  return [...stats.values()];
}
