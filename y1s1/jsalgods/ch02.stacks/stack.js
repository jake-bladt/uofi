function Stack() {
  let items = [];

  this.push = (e) => items.push(e);
  this.pop = (e) => items.pop(e);
  this.peek = () => items.length > 0 ? items[items.length -1] : undefined;
}