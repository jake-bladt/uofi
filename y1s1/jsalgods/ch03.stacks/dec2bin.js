function Stack() {
  let items = [];

  this.push = (e) => items.push(e);
  this.pop = () => items.pop();
  this.peek = () => items.length > 0 ? items[items.length -1] : undefined;
  this.isEmpty = () => items.length === 0;
  this.size = () => items.length;
  this.clear = () => items = [];
  this.print = () => console.log(items);
  this.reduce = (fn, init) => items.reduce(fn, init);
}

function decToBin(decNum) {
  let remStack = new Stack();
  let working = decNum;
  let rem = -1;

  while(working > 0) {
    rem = Math.floor(working % 2);
    remStack.push(rem);
    working = Math.floor(working / 2);
  }

  return remStack.reduce((agg, elem) => agg + elem, "");

}

console.log(decToBin(51257));
