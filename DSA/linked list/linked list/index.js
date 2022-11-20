class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }

  print() {
    let output = "";
    let curr = this;

    while (curr) {
      output += `${curr.val} -> `;
      curr = curr.next;
    }
    console.log(output);
  }

  addToEnd(node) {
    let curr = this;
    let prev = null;

    while (curr) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = node;
  }

  removeByIndex(index) {
    let curr = this;
    let prev = null;
    let i = 0;

    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    prev.next = prev.next.next
    return curr
  }

  addByIndex(index, node) {
    let curr = this;
    let prev = null;
    let i = 0;

    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    node.next = curr
    prev.next = node
    
  }


}

const head = new Node(1, new Node(2, new Node(3, new Node(4, null))));

head.print();
