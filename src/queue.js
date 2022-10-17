const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  data = null;

  getUnderlyingList() {
    return this.data;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if(this.data === null) {
      this.data = {
        value: node.value,
        next: node.next
      }
    } else {
      this.addNode(this.data, node);
    }
  }

  addNode(data, node) {
    if (data.next === null) {
      data.next = {
        value: node.value,
        next: node.next
      };
    } else {
      this.addNode(data.next, node);
    }
  }

  dequeue() {
    const head = this.data.value;
    this.data.value = this.data.next.value;
    this.data.next = this.data.next.next;

    return head;
  }
}

module.exports = {
  Queue
};
