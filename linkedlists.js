// Alternative to an array data structure.
// Linked lists don't actually have indices. It has a reference to the next element.
// First element is called the Head, and it links to to next one, and so on and so forth.
// The last is the tail, and it references null.
// They are much more efficient than standard arrays.
// Downside is that you have to go through each node to get where you want.
// Arrays are quicker to get random elements, but linked lists are much quicker to add nodes into the list

// Singly Linked List classes and functions.

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Insert at Head

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  // get by index

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);

    const prev = this.getByIndex(index - 1);

    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();

    const prev = this.getByIndex(index - 1);

    if (prev == null) return null;

    prev.next = prev.next.next;
    this.length--;
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
