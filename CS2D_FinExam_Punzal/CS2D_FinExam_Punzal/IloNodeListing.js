class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add node to the end of the list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = newNode;
    }
  }

  // List all nodes in the linked list
  listNodes() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }
}

// Create a new linked list instance and add nodes
const linkedList = new LinkedList();
linkedList.append(5);
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);

// List all nodes
linkedList.listNodes();  // Output: 10 -> 20 -> 30 -> 40
