function PriorityQueue() {

  let items = [];

  function QueueElement(elem, priority) {
    this.element = elem;
    this.priority = priority;
  }

  this.enqueue = (item, priority) => {
    let qe = new QueueElement(item, priority);
    let added = false;

    for(let i = 0; i < items.length; i++) {
      if(qe.priority < items[i].priority) {
        items.splice(i, 0, qe);
        added = true;
        break;
      }
    }
    if(!added) items.push(qe);
  }

  this.dequeue = () => items.shift();
  this.print = () => console.log(items.map(i => i.element));

}


