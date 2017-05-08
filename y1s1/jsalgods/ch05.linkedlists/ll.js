function LinkedList() {
  function Node(elem) {
    this.element = elem;
    this.next = null;
  }

  let length = 0;
  let head = null;
  let last = null;

  this.size = () => length;
  this.getHead = () => head;

  this.append = (elem) => {
    let node = new Node(elem);
    if(head == null) {
      head = node;
    } else {
      last.next = node; 
    }
    last = node;
    length++;
  }

  this.removeAt = (pos) => {
    if(pos < 0 || pos > length -1) return null;

    let elem = head;
    for(let i = 0; i < pos - 1; i++) {
      elem = elem.next;
    }

    if(pos === 0) head = head.next;
    let ret = elem.next.element;
    elem.next = elem.next.next;
    length--;
    return ret;
  }

  this.insertAfter = (newElem, pos) => {
    if(pos < 0 || pos > length) return false;

    let elem = head;
    for(let i = 0; i < pos; i++) {
      elem = elem.next;
    }

    let newNode = new Node(newElem);
    newNode.next = elem.next;
    elem.next = newNode;
    length++;

  }

  this.print = () => {
    let e = head;
    do {
      console.log(e.element);
    } while(e = e.next)
  }

  this.inspect = () => `head: ${head}, last: ${last}, length: ${length}`

}

let ll = new LinkedList();
ll.append('Kitten');
ll.append('Mother Cat');
ll.append('Another Kitten');
ll.insertAfter(0, 'Aufauf');
ll.print();

ll.removeAt(1);
ll.print();
