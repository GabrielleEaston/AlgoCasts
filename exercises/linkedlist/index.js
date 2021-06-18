// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
    
  }
}
const node1 = new Node("hello");
const list = new LinkedList();
console.log(node1);
console.log(linked1);
linked1.insertFirst("hello");
//module.exports = { Node, LinkedList };
