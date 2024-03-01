import { calculateGain } from "../math/calculateGain";
import { calculateEntropy } from "../math/entropy";
import { extractColumn } from "../math/extractColumn";
import { splitByColumnIndex } from "../math/splitByColumnIndex";

export class Matrix {
  private readonly _head: string[];
  private readonly _body: string[][];

  get dataSetLength() {
    return this._body.length;
  }

  get dataSetWidth() {
    return this._head.length;
  }

  get decisionColumn() {
    return this.getColumnByIndex(this._head.length - 1);
  }

  get hasDecision() {
    const decisionColumn = this.decisionColumn;
    const value = decisionColumn[0];
    return decisionColumn.every((decision) => value === decision);
  }

  constructor(head: string[], body: string[][]) {
    Matrix.validateDatasetBodyWidth(body);
    Matrix.validateHeader(head, body);
    this._head = head;
    this._body = body;
  }

  getMaxValuableColumnIndex() {
    const maxGain = { v: 0, index: -1 };
    for (let i = 0; i < this.dataSetWidth - 1; i++) {
      const gainFromColumn = this.calculateGainFor(i);

      if (Number.isNaN(gainFromColumn)) {
        throw new Error(`Can't calculate gain for column #${i}`);
      }

      if (maxGain.v < gainFromColumn) {
        maxGain.v = gainFromColumn;
        maxGain.index = i;
      }
    }

    if (maxGain.index === -1) {
      throw new Error(`Valuable column not found`);
    }

    return maxGain;
  }

  splitByColumnIndex(columnIndex: number): Map<string, Matrix> {
    const splittedMatrix = splitByColumnIndex(this._body, columnIndex);
    return [...splittedMatrix.entries()].reduce((acc, v) => {
      const [key, body] = v;
      acc.set(key, new Matrix(this._head, body));
      return acc;
    }, new Map<string, Matrix>());
  }

  private getColumnByIndex(columnIndex: number): string[] {
    const maxWidth = this._body[0]?.length - 1 ?? 0;
    if (columnIndex > maxWidth) {
      throw new Error(
        `Column index: "${columnIndex}" is out of range: ${maxWidth}`
      );
    }
    return extractColumn(this._body, columnIndex);
  }

  private calculateGainFor(columnIndex: number): number {
    const decisionColumnEntropy = calculateEntropy(
      this.decisionColumn,
      this.decisionColumn[0]
    );

    const targetColumnStats = this.calculateColumnStatFor(columnIndex);
    const length = this._body.length;
    const valueEntropy = targetColumnStats.reduce((acc, v) => {
      const singleEntropy = (v.length / length) * calculateEntropy(v, v[0]);
      return acc + singleEntropy;
    }, 0);

    return decisionColumnEntropy - valueEntropy;
  }

  private calculateColumnStatFor(columnIndex: number): string[][] {
    const data = this._body;
    const stats = new Map();
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      const targetKey = row[columnIndex];
      const targetValue = row[row.length - 1];
      const values = stats.has(targetKey) ? stats.get(targetKey) : [];
      values.push(targetValue);
      stats.set(targetKey, values);
    }

    return [...stats.values()];
  }

  private static validateDatasetBodyWidth(body: string[][]) {
    const firstRowWidth = body[0].length;
    const sameWidth = body.every((row) => row.length === firstRowWidth);
    if (!sameWidth) {
      throw new Error(`Rows have different size`);
    }
  }

  private static validateHeader(header: string[], body: string[][]) {
    const firstRowWidth = body[0].length;
    const headWidth = header.length;

    if (firstRowWidth !== headWidth) {
      throw new Error(`Header has more or less elements than body`);
    }
  }
}
