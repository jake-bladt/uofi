function LinkedList() {
  function Node(elem) {
    this.element = elem;
    this.next = null;
  }

  let length = 0;
  let head = null;
  let last = null;

  this.size = () => length;

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
ll.print();
