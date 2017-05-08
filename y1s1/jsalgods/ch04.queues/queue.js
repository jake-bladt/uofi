function Queue() {
  let items = [];

  this.enqueue = (...es) => es.forEach(e => items.push(e));

}
