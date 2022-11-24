// working with linked list

const LinkedList = require("./linkedlists");

const ll = LinkedList.fromValues(10, 20, 30, 40);

ll.print();
ll.removeAtIndex(2);
ll.print();
