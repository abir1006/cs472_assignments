function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;

  // Adds a new node to the end of the list
  this.add = function(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  };

  // Removes the first node that matches the given data
  this.remove = function(data) {
    if (!this.head) return;
    let current = this.head;
    let previous = null;
    while (current) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.length--;
        return;
      }
      previous = current;
      current = current.next;
    }
  };

  // Prints the contents of the list
  this.print = function() {
    let current = this.head;
    let string = "LinkedList{";
    while (current) {
      string += current.data + ",";
      current = current.next;
    }
    string = string.slice(0, -1) + "}";
    console.log(string);
  };
}

// Usage
let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); // Output: LinkedList{1,2,3}
linkedList.remove(2);
linkedList.print(); // Output: LinkedList{1,3}