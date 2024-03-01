import { Matrix } from "../matrix/matrix";

class DTreeNode {
  decision: string | undefined;
  attribute: string | undefined;
  branches: Map<string, DTreeNode> | undefined;
}

export class DTree {
  _rootNode = new DTreeNode();
  _head: string[] | undefined;
  _dataset: Matrix | undefined;

  train(dataset: string[][]) {
    this._head = dataset[0];
    this._dataset = new Matrix(this._head, dataset.slice(1));
    this._rootNode = this.buildTree(this._dataset);
  }

  predict(data: string[]) {
    let i = 0;
    let node = this._rootNode;
    while (node.decision == null && i < 100_000) {
      const attr = node.attribute;
      const valueIndex = this._head!.findIndex((x) => x === attr);
      const value = data[valueIndex];
      node = node.branches?.get(value)!;
      i++;
    }
    return { decision: node.decision, i };
  }



  private buildTree(dataset: Matrix): DTreeNode {
    const node = new DTreeNode();
    const hasDecision = dataset.hasDecision;

    if (hasDecision) {
      node.decision = dataset.decisionColumn[0];
      return node;
    }

    const mostValuableColumnIndex = dataset.getMaxValuableColumnIndex();

    const choices = dataset.splitByColumnIndex(mostValuableColumnIndex.index);
    node.attribute = this._head![mostValuableColumnIndex.index];

    node.branches = [...choices.entries()].reduce((acc, v) => {
      const [key, subset] = v;
      acc.set(key, this.buildTree(subset));
      return acc;
    }, new Map<string, DTreeNode>());

    return node;
  }
}
