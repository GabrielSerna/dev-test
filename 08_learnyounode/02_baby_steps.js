// ricevere un array e sommare tutti i numeri al suo interno

// ES5
let total = 0;

for (i = 2; i < process.argv.length; i += 1) {
  total += Number(process.argv[i]);
}

console.log(total);

// ES6
// let total = process.argv
//   .map(val => +val)
//   .filter(val => Number.process.argv(val))
//   .reduce( (sum, val) => sum + val);

// console.log(total);
