class Fraction {
  constructor (num, denom) {
    this.numerator = num;
    this.denominator = denom;
  }

  decimalValue() {
    return this.numerator / this.denominator;
  }
}

let f = new Fraction(1.0, 2.0);
console.log(f.decimalValue());
