function Queue() {
  let items = [];

  this.enqueue = (...es) => es.forEach(e => items.push(e));
  this.dequeue = () => items.shift();
  this.front = () => items[0];
  this.isEmpty = () => items.length === 0;
  this.size = () => items.length;
  this.print = () => console.log(items);
}

let q = new Queue();
q.enqueue('Manny', 'Moe', 'Jack');
console.log(q.size());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty());
