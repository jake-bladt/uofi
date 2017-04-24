function Thing(ndx) {
  this.name = "thing";
  this.index = ndx;
}

let t = new Thing(0);
console.log(`${t.name} (${t.index})`);
