function hasPets(owner, petType, count) {
  return `${owner} has ${count} ${petType}(s).`;
}

let theArgs = ['Jake', 'kitten', 'many'];
console.log(hasPets(...theArgs));
