//for main class. All list nodes inheritance from this.
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null; // by default, tis must be null.
  }
}
// for create linked list
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // for get the size of node
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }
    return count
  }
  //This method empties out the list.
  clear() {
    this.head = null;
  }

  //This method returns the last node of the linked list.
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  //This method returns the first node of the linked list.
  getFirst() {
    return this.head;
  }

}

let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(4);
node1.next = node2; //this.next = null becomes next = node2 and so on....
node2.next = node3

let list = new LinkedList(node1) // create linked list

console.log(
  list.head.next.data //3 if use to list.head.next.next.data , output will be 4
)

console.log(list.size()) //3, size of the list

console.log(

  node1


)
