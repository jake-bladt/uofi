function Thing(ndx) {
  let collection = [];
  collection[ndx] = this;

  this.name = "thing";
  this.index = ndx;
  this.things = collection;
}

let t = new Thing(0);
let u = new Thing(1);
console.log(`${t.name} (${t.index})`);
console.log(u.things);
