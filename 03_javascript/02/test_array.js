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

// staff.splice(staff.length -3);                                               // removes last 3 elements starting from the bottom

staff.splice(staff.length -3, 3, 'Claudio', 'Michele', 'Michela');              // removes and replaces 3 elements starting from -3 position from the bottom

// staff.splice(3, 1);                                                          // removes element number 3 of the array

staff.splice(3, 1, 'Eleonora');                                                 // replaces elemenet number 3 of the array

staff.splice(1, 0, 'Chiara');                                                   // adds Chiara at position 1 of the array

// console.log(staff[5]);                                                       // retunrs element at position 5

//======================================================================================================================
//======================================================================================================================



console.log(staff);