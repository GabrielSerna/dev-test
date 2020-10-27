//==============================================================================
// ex. 01 metodi dell'array
function ex01 () {
  let numbers = [2, 3, 4, 7, 5, 6];

  console.log(`
  ========================================================
  ex: 01 metodi degli array
  `);
  // .find() => restituisce il primo elemento che soddisfa la condizione
  numbers1 = numbers.find(el => el > 5);                                        // 7

  // .map() => restituisce un array di elementi true e false che soddisfano la consizione. inoltre é distruttivo in quanto modifica l'array
  numbers2 = numbers.map(el => el > 5);                                         // [false, false, false, true, false, true]

  // .filter() => restituisce gli elementi che soddisfano la consizione
  numbers3 = numbers.filter(el => el > 5);                                      // [7, 6]

  // .join() converte in stringa l'array inserendo un separatore (opzionale)
  numbers4 = numbers.join(' - ');                                               // 2 - 3 - 4 - 7 - 5 - 6

  // .some() itera gli elementi dell'array e restituisce 'true' o 'false' se almeno uno soddisfa la condizione
  numbers5 = numbers.some( x => x === 3);                                       // true
  numbers6 = numbers.some( x => x === 1);                                       // false

  // .every() restituisce 'true' o 'false' se tutti gli elementi dell'array soddisfano la condizione
  numbers7 = numbers.every( x => x > 0 && x <= 10);                             // true
  numbers8 = numbers.every( x => x > 0 && x <= 6);                              // false

  // .trim() Remove whitespace from both sides of a string:
  str1 = `        hello world        `;
  str1Trim = str1.trim(); 	                                                    // hello world

  // .splice()


  // .slice() return a section of an string
  console.log()
}
ex01()

//==============================================================================
