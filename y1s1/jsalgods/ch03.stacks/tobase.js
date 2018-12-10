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

function convert(decNum) {
  const digits = '0123456789ABCDEF';
  return {
    toBase: (base) => {
      let remStack = new Stack();
      let working = decNum;
      let rem = -1;
      while(working > 0) {
        rem = Math.floor(working % base);
        remStack.push(digits[rem]);
        working = Math.floor(working / base);
      }

      return remStack.reduce((agg, elem) => agg + elem, "");
    }
  }
}

console.log(convert(1000).toBase(16));
console.log(convert(10000).toBase(8));
console.log(convert(314159).toBase(2));
