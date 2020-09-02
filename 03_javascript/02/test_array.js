const staff = ['Luca', 'Riccardo', 'Gabriel', 'Jessica', 'Mattia', 'Michela', 'Claudio'];
const numeriDispari = [1,3,5,7,9];

/*
staff.push('Michele', Francesca(), Francesca());

console.log(staff);

let risultato = Francesca();

function Francesca() {
    console.log('Io sono Francesca');
    return 1122;
};
*/

let position = staff.indexOf('Jessica');
// console.log(position);

staff.push('Michele', 'Paolo');                                                 // adds a new elements to the end of an array

staff.unshift('Bertaggia');                                                     // adds a new element at the start of an array

staff.pop();                                                                    // removes array's last element

staff.shift();                                                                  // removes array's first element

//======================================================================================================================
//======================================================================================================================
// .splice()

// staff.splice(staff.length -3);                                               // removes last 3 elements starting from the bottom

staff.splice(staff.length -3, 3, 'Claudio', 'Michele', 'Michela');              // removes and replaces 3 elements starting from -3 position from the bottom

// staff.splice(3, 1);                                                          // removes element number 3 of the array

staff.splice(3, 1, 'Eleonora');                                                 // replaces elemenet number 3 of the array

staff.splice(1, 0, 'Chiara');                                                   // adds Chiara at position 1 of the array

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
// .()