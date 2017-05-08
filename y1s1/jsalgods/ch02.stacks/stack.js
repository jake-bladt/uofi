function Stack() {
  let items = [];

  this.push = (e) => items.push(e);
  this.pop = (e) => items.pop(e);
  this.peek = () => items.length > 0 ? items[items.length -1] : undefined;
  this.isEmpty = () => items.length === 0;
  this.size = () => items.length;
  this.clear = () => items = [];
  this.print = () => console.log(items);
}
