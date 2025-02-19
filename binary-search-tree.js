class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    while (true) {
      let currentNode = this.root;
      if (value === currentNode.value) {
        return 'Duplicate node is not allowed';
      }
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return this;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return this;
        }
      }
    }
  }

  find(value) {
    if (!this.root) {
      return 'Tree is empty';
    }
    function findHelper(node, value) {
      if (node === null) {
        return 'Not found';
      }
      if (node.value === value) {
        return node;
      }
      if (node.value > value) {
        return this.findHelper(node.left);
      }
      if (node.value < value) {
        return this.findHelper(node.right);
      }
    }
    return this.findHelper(this.root);
  }

  bfsTraverse() {
    let traverse = [];
    if (!this.root) {
      return 'empty tree';
    }
    let treeNodes = [this.root];
    while (treeNodes.length) {
      const current = treeNodes.shift();
      traverse.push(current.value);
      if (current.left) {
        treeNodes.push(current.left);
      }
      if (current.right) {
        treeNodes.push(current.right);
      }
    }
    return traverse;
  }

  dfsPreOrderTraverse() {
    let traverse = [];
    if (!this.root) {
      return 'empty tree';
    }

    function helper(node) {
      traverse.push(node.value);
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
    }
    helper(this.root);
    return traverse;
  }

  dfsPostOrderTraverse() {
    let traverse = [];
    if (!this.root) {
      return 'empty tree';
    }

    function helper(node) {
      if (node.left) {
        helper(node.left);
      }
      if (node.right) {
        helper(node.right);
      }
      traverse.push(node.value);
    }
    helper(this.root);
    return traverse;
  }

  dfsInOrderTraverse() {
    let traverse = [];
    if (!this.root) {
      return 'empty tree';
    }

    function helper(node) {
      if (node.left) {
        helper(node.left);
      }
      traverse.push(node.value);
      if (node.right) {
        helper(node.right);
      }
    }
    helper(this.root);
    return traverse;
  }
}

let tree = new BST();
console.log(tree.insert(10));
console.log(tree.insert(3));
console.log(tree.insert(13));
console.log(tree.find(4));

console.log(tree.dfsPreOrderTraverse());
