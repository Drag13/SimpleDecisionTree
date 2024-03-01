export function calculateEntropy (dataSet: string[], value: string) {
    if (!dataSet.length) {
      return 0;
    }
    const allLabelsLength = dataSet.length;
    const givenLabelLength = dataSet.filter((x) => x === value).length;
  
    if (!givenLabelLength) {
      throw new Error(`VALUE "${value}" not found in the dataset`);
    }
  
    if (givenLabelLength === dataSet.length) {
      return 0;
    }
  
    const otherLabelsQuantity = allLabelsLength - givenLabelLength;
    const valueEntropy =
      (givenLabelLength / allLabelsLength) * Math.log2(givenLabelLength / allLabelsLength);
    const otherEntropy =
      (otherLabelsQuantity / allLabelsLength) * Math.log2(otherLabelsQuantity / allLabelsLength);
  
    return -1 * (valueEntropy + otherEntropy);
  }