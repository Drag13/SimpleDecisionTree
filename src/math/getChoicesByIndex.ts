function getChoicesByIndex(dataset: string[][], index: number) {
  const choices = dataset.reduce((acc, v) => {
    return acc.add(v[index]);
  }, new Set());

  return [...choices];
}
