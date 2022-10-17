const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  data = [];

  root() {
    return this.data.length ? { data: this.data[0] } : null;
  }

  add(data) {
    this.data.push(data);
  }

  has(data) {
    return this.data.includes(data);
  }

  find(data) {
    const result = this.data.find(item => item === data);
    return result ? { data: result } : null
  }

  remove(data) {
    this.data = this.data.filter(item => item !== data);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }
}

module.exports = {
  BinarySearchTree
};