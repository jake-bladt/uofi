function LinkedList() {
  function Node(elem) => {
    this.element = elem;
    this.next = null;
  }

  let length = 0;
  let head = null;
  let last = null;

  this.append = (elem) => {
    let node = Node(elem);
    if(head === null) {
      head = node;
    } else {
      last.next = node; 
    }
    last = node;
    length++;
  }



}
