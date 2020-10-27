// let arr = process.argv.slice(2)
// let arrFirstChar = arr.forEach( el => console.log(arr.charAt(0)));

// console.log(`${process.argv.slice(2).forEach( el => console.log(charAt(0)))}`);

let inputs = process.argv.slice(2); // ['Gabriel', 'fa', 'un', 'test']
let result = inputs.map( value => value[0] ) // [G, f, u, t]
                    .reduce( (prev, curr) => prev + curr );

console.log(`${inputs} becomes ${result}`);