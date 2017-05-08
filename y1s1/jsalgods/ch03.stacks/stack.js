function Stack() {
  let items = [];

  this.push = (e) => items.push(e);
  this.pop = () => items.pop();
  this.peek = () => items.length > 0 ? items[items.length -1] : undefined;
  this.isEmpty = () => items.length === 0;
  this.size = () => items.length;
  this.clear = () => items = [];
  this.print = () => console.log(items);
}

let s = new Stack();
console.log(s.isEmpty());
s.push(1);
s.push(1);
s.push(2);
s.push(3);
s.push(5);

console.log(s.size());
console.log(s.pop());
