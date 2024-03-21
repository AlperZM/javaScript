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
}

let node1 = new ListNode(2);
let node2 = new ListNode(3);
let node3 = new ListNode(4);
node1.next = node2; //this.next = null becomes next = node2 and so on....
node2.next = node3

console.log(

  node1


)
