//==============================================================================
// ex. 01 simula x eventi con la stessa probabilitá di uscita
function ex01() {
  console.log(`
  ========================================================
  ex: 
  `);

  function simEvent (numEvents) {
    let event = Math.floor(numEvents * Math.random());
    return event;
  };

  console.log(`Rolled a ${simEvent(10) + 1}`);
}

//==============================================================================
// ex. 02 valore massimo e minino di un array con .max e .min
function ex02() {
  console.log(`
  ========================================================
  ex: 
  `);

  let num = [1, 2, 3, 4, 5, 6, 7];

  max = Math.max(...num);
  min = Math.min(...num);

  console.log(max, min);
}

//==============================================================================
// ex. 03 trovare la radice quadrata di un numero con .sqrt
function ex03() {
  console.log(`
  ========================================================
  ex: 03 trovare la radice quadrata di un numero
  `);

  let radQ = function(num) {
    return Math.sqrt(num);
  }
  let value = radQ(16)
  console.log(value);
}

//==============================================================================
// ex. 04 sintassi per creare un array
function ex() {
  console.log(`
  ========================================================
  ex: 04 sintassi per creare un array 
  `);

  let arr0 = new Array(4);                                                      // [undefined, undefined, undefined, undefined]
  let arr1 = new Array[4];                                                      // [4]
  let arr2 = new Array('head', 'body', 'footer');                               // ['head', 'body', 'footer']

}

//==============================================================================
// ex. 05 trasformare una stringa in un array
function ex05() {
  console.log(`
  ========================================================
  ex: 05 trasformare una stringa in un array
  `);

  let str1 = 'abcdefg';
  let arr1 = [...str1];                                                         // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  console.log(arr1);

  let str2 = 'qwerty'
  let arr2 = arr1.concat(...str2);                                              // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  console.log(arr2);

  let str3 = 'riel'
  let arr3 = ['g', 'a', 'b',...[...str3]];                                      // ['g', 'a', 'b', 'r', 'i', 'e', 'l']
  console.log(arr3);

  let arr4 = ['s', 'e', 'r',...['n', 'a']];                                     // ['s', 'e', 'r', 'n', 'a']

  console.log(arr4);
}

//==============================================================================
// ex. 06 restituire la lunghezza dei valori di un array con .map
function ex06() {
  console.log(`
  ========================================================
  ex:  06 restituire la lunghezza dei valori di un array
  `);

  let arr = ['uno', 'gabriel'];
  let lunghezza = arr.map((v, i, array) => v.length);
  console.log(lunghezza);
}

//==============================================================================
// ex. 07 creare un array che soddisfa una condizione su un altro array con .filter
function ex07() {
  console.log(`
  ========================================================
  ex: 07 creare un array che soddisfa una condizione su un altro array con .filter
  `);

  let arr1 = [1, 2, 3, 4, 5, 6];
  let arr2 = arr1.filter( v => v > 3);                                          // [4, 5, 6]
  console.log(arr2);  
}

//==============================================================================
// ex. 08 forEach applicato ad un oggetto
function ex08() {
  console.log(`
  ========================================================
  ex: 08 forEach applicato ad un oggetto
  `);

  let people = [
    { id: 1, name: 'Gabriel',   age: 35},
    { id: 2, name: 'Mattia',    age: 28},
    { id: 3, name: 'Michele',   age: 28}
  ];
  
  let check = people.filter( i => i.age < 30);

  console.log(check);

  /*
  return:
  [
  { id: 2, name: 'Mattia', age: 28 },
  { id: 3, name: 'Michele', age: 28 }
  ]
  */
}

//==============================================================================
// ex. 
function ex() {
  console.log(`
  ========================================================
  ex: 
  `);

  

}

//==============================================================================
// ex. 
function ex() {
  console.log(`
  ========================================================
  ex: 
  `);

  

}

//==============================================================================
// ex. 
function ex() {
  console.log(`
  ========================================================
  ex: 
  `);

  

}

//==============================================================================
// ex. 
function ex() {
  console.log(`
  ========================================================
  ex: 
  `);

  

}

//==============================================================================
// ex. 
function ex() {
  console.log(`
  ========================================================
  ex: 
  `);

  

}


//==============================================================================
// ex. 
function ex() {
  console.log(`
  ========================================================
  ex: 
  `);

  

}

//==============================================================================
// ex. 
function ex() {
  console.log(`
  ========================================================
  ex: 
  `);

  

}

