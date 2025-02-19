class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentINdex = Math.floor((index - 1) / 2);
      if (value < this.values[parentINdex]) break;
      const temp = this.values[parentINdex];
      this.values[parentINdex] = value;
      this.values[index] = temp;
      index = parentINdex;
    }
  }

  remove() {
    const extractValue = this.values[0];
    const lastValue = this.values.pop();
    this.values[0] = lastValue;
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let left, right;
      let swap = null;
      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (left > element) {
          swap = leftIndex;
        }
      }
      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (right > element && swap === null) ||
          (swap !== null && right > left)
        ) {
          swap = rightIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
    return extractValue;
  }
}
let heap = new MaxBinaryHeap();
heap.insert(55);
heap.remove();
