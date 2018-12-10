// This doesn't work like that.
function Thing(index, val) {
  this = { index, val };
}

let t = new Thing(0, 'fruit');
console.log(t.index);

