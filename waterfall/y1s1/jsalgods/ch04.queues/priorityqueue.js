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

  this.dequeue = () => items.shift().element;
  this.print = () => console.log(items.map(i => i.element));

}

let q = new PriorityQueue();

q.enqueue('Save the world.', 2);
q.enqueue('Pet kitten.', 1);
q.enqueue('Get some sleep.', 5);

q.print();
console.log(q.dequeue());
