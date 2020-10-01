//==============================================================================
// ex. 01 medoti dell'arraymedoti dell'array
function ex01 () {
  console.log(`
  ========================================================
  ex: 01 medoti dell'array`
  );
 
  let staff = ['Luca', 'Riccardo', 'Gabriel', 'Jessica', 'Mattia', 'Michela', 'Claudio'];

  console.log(`l'arrey iniziale é ${staff}`);

  function Francesca() {
      console.log('Io sono una function');
  };

  staff.push('Michele', Francesca());                                           // .push aggiunge alla fine gli elementi
  staff.unshift('Bertaggia');                                                   // adds a new element at the start of an array
  staff.pop();                                                                  // removes array's last element
  staff.shift();                                                                // removes array's first element
  staff.sort();                                                                 // ordina l'array in modo alfabetico
  console.log(`l'indice di Riccardo é ${staff.indexOf('Riccardo')}`);           // .indexOf restituisce la posizione dell'elemnento indicato
}

//==============================================================================
// ex. 02 splice

// staff.splice(staff.length -3);                                               // removes last 3 elements starting from the bottom

// staff.splice(staff.length -3, 3, 'Claudio', 'Michele', 'Michela');              // removes and replaces 3 elements starting from -3 position from the bottom

// staff.splice(3, 1);                                                          // removes element number 3 of the array

// staff.splice(3, 1, 'Eleonora');                                                 // replaces elemenet number 3 of the array

// staff.splice(1, 0, 'Chiara');                                                   // adds Chiara at position 1 of the array

// console.log(staff[5]);                                                       // retunrs element at position 5

// console.log(staff);

//======================================================================================================================
//======================================================================================================================
// .concat()

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];

const nums = num1.concat(num2, num3, 10);

// console.log(nums);

//======================================================================================================================
//======================================================================================================================
// .find()

const nameAge = [
    {name: 'Luca', age: 37},
    {name: 'Mattia', age: 32},
    {name: 'Claudio', age: 30},
    {name: 'Paolo', age: 40},
    {name: 'Gabriel', age: 35},
];

function persone(nome) {
    return nome.name === 'Paolo';
}

// console.log(nameAge.find(persone));

//======================================================================================================================
//======================================================================================================================
// .indexOf()

/*
const noi = ['Luca', 'Riccardo', 'Gabriel', 'Mattia', 'Michela', 'Claudio'];

console.log(noi.indexOf('Riccardo'));                                           // 1

console.log(noi.indexOf('Eleonora', 2));                                        // -1 perché non esiste

console.log(noi.indexOf('Chiara'));                                             // ricerca l oggetto a partire dalla posizione indicata


function updateStaff (noi, persona) {
    if (noi.indexOf('Chiara') === -1) {
        noi.push('Chiara');
        console.log(`Now we are : ${noi}`);
    } else if (noi.indexOf('Chiara') > -1) {
        console.log(`Chiara already exists in the staff.`);
    }
}

updateStaff(noi, 'Chiara'); 
updateStaff(noi, 'Chiara'); 
 */

//======================================================================================================================
//======================================================================================================================
// .join()

/*
const marchi = ['Ferrari', 'Lamborghini', 'McLaren'];

console.log(marchi.join());
console.log(marchi.join(' altrimenti '));
console.log(marchi.join(''));
*/

//======================================================================================================================
//======================================================================================================================
// .push()

/*
const movies = ['Ironman 1', 'Ironman 2', 'Ironman 3'];
const character = ['Tony', 'Stark'];
const moreMovies = movies.push('Avengers', 'Infinity war', 'End game');         // adds elements to the array

console.log(movies);
movies.push.apply(movies, character);                                           // combine 2 arrays

console.log(movies);
*/


//======================================================================================================================
//======================================================================================================================
// .sort()
//  () se lo lascio vuoto il programma effettua il riordino di default con il metodo UNICODE. 
//     vengono convertiti in stringhe e ordinati secondo: numeri, maiuscole, minuscole.


const fruit = ['pesche', 'mele', 'banane'];
const scores = [01, 2, 10, 24, 55, 46, 05, 11, 3];
const things = ['libri', 'Libri', '1 libro', '2 libri'];

/*
function compareNumbers(a, b) {
  return a - b;
}

console.log(`ordinato con compareNumbers per grandezza: ${scores.sort(compareNumbers)}` );
// return: ordinato con compareNumbers per grandezza: 1,2,3,5,10,11,24,46,55
// riordina per grandezza

function compareNumbers(a, b) {
  return -1;
}

console.log(`ordinato con compareNumbers dal fondo: ${scores.sort(compareNumbers)}` );
// return: ordinato con compareNumbers dal fondo: 3,11,5,46,55,24,10,2,1
// riordina partendo dal fondo
*/

/*
scores.sort(function(a, b) {
    return a - b;
});

console.log(scores);
//return: (9) [1, 2, 3, 5, 10, 11, 24, 46, 55]
*/

/*
scores.sort();
console.log(scores);
fruit.sort();
console.log(fruit);
console.log(scores.sort());
console.log(things.sort());
*/

//======================================================================================================================
//======================================================================================================================
// .values()

/*
const valori = ['a', 'b', 'c', 'd', 'e'];
const estrai = valori.values();

for (const lettere of estrai) {
console.log(lettere);
}

return
a
b
c
d
e
*/

/*
function pranzi(a) {
    let result;
    if (a === 'no') {
      result = 'buon appetito da solo';
    } else if (a === 'si') {
      result = 'vuoi il salmone colorato da allevamento oppure il pollo buono del contadino?';
    }
    return result;
  }
  
  console.log(pranzi('si'));
  // le risposte sono 'no'oppure 'si'
  */

//======================================================================================================================
//======================================================================================================================
//
