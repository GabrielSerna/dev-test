//==============================================================================
// ex. 41 richiamare una proprietá tramite this
function ex41 () {
  console.log(`
  ========================================================
  ex: 01 richiamare una proprietá tramite this
  `);

  function test() {
    console.log(this.p1);
  }

  let obj1 = {
    p1 : 10,
    fn : test
  };

  let obj2 = {
    p1 : 20,
    fn : test
  };

  obj1.fn();
  obj2.fn();
}

//==============================================================================
// ex. 42 iterare un array
function ex42() {
  console.log(`
  ========================================================
  ex: 42 iterare un array
  `);

  let accessori = ['tastiera', 'mouse', 'SSD', 'scheda video'];

  // for (i = 0; i < accessori.length; i++) {
  //   console.log(accessori[i]);
  // }

  // for (i of accessori) {
  //   console.log(i);
  // }

  // accessori.forEach((i, a) => {
  //   console.log(i, a);
  // });

  accessori.info = 'Programmare';
  console.dir(accessori.info);
}

//==============================================================================
// ex. 43 metodi degli array
function ex43() {
  console.log(`
  ========================================================
  ex: 43 
  `);

  let a = [1, 2, 3, 4, 5];

  // a.push(6);                                                                    // [1, 2, 3, 4, 5, 6]
  // a.pop();                                                                      // [1, 2, 3, 4]
  // a.shift();                                                                    // [2, 3, 4, 5]
  // a.unshift(0);                                                                 // [0, 1, 2, 3, 4, 5]
  // console.log(a.indexOf(2));                                                    // restituisce la posizione nell'indice dell'elemento passato
  
  // a.map(function (x, i, arr) {                                                  // stampa tutti gli elementi dell'array con il loro indice e tutto l'array
  //   console.log(x, i, arr);
  // });
  
  // console.log(a);
}

//==============================================================================
// ex. 44 agire su ogni elemento di un array e moltiplicarlo per 10
function ex44() {
  console.log(`
  ========================================================
  ex: 44 agire su ogni elemento di un array e moltiplicarlo per 10
  `);

  let a = [1, 2, 3, 4, 5];

  let ax10 = a.map(function(x, i, arr) {                                        // [10, 20, 30, 40, 50]
    return x * 10;
  });
  console.log(ax10);
}

//==============================================================================
// ex. 45 array di oggetti
function ex45() {
  console.log(`
  ========================================================
  ex: 45 array di oggetti
  `);

  const tv = [
    { marca: 'LG',        modello: '65 pollici', prezzo: 820 },
    { marca: 'Sony',      modello: '55 pollici', prezzo: 680 },
    { marca: 'Samsung',   modello: '50 pollici', prezzo: 780 },
    { marca: 'Sharp',     modello: '55 pollici', prezzo: 910 },
    { marca: 'Panasonic', modello: '60 pollici', prezzo: 1200 },
    { marca: 'LG',        modello: '45 pollici', prezzo: 580 }
  ];

  const prezzi = tv.map(p => p.prezzo);
  console.log(prezzi);
}

//==============================================================================
// ex. 46 creare un array con elementi di un altro array tramite FILTER
function ex46() {
  console.log(`
  ========================================================
  ex: 46 creare un array con elementi di un altro array tramite FILTER
  `);

  const numeri = [1, 12, 15, 76, 356, 3221, 5777, 8793, 9862];

  const pari = numeri.filter(elemento => elemento % 2 === 0);
  const dispari = numeri.filter(elemento => elemento % 2 === 1);
  const sopraCento = numeri.filter(elemento => elemento > 100);

  console.log(pari);
  console.log(dispari);
  console.log(sopraCento);
}

//==============================================================================
// ex. 47 concatenare diversi array in uno solo tramite .reduce - video 78
function ex47() {
  console.log(`
  ========================================================
  ex: 47 concatenare diversi array in uno solo  tramite .reduce - video 78
  `);

  let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const callback = (concatenato, elemento) => { 	                              // concatenato é un accumulatore
    return concatenato.concat(elemento);
  }

  //[].concat([1, 2, 3])                                                        // [1, 2, 3] la 1ma volta restituisce questo
  //[1, 2, 3].concat([4, 5, 6])                                                 // [1, 2, 3, 4, 5, 6] la 2da volta restituisce questo
  //[1, 2, 3, 4, 5, 6].concat([7, 8, 9])                                        // [1, 2, 3, 4, 5, 6, 7, 8, 9] la 3za volta restituisce questo

  const b = a.reduce(callback, []);                                             // prende il primo parametro e lo somma al secondo chiamato accumulatore
  console.log(b);                                                               
}

//==============================================================================
// ex. 48 aggiungere degli elementi ad un array tramite splice
function ex48() {
  console.log(`
  ========================================================
  ex: 48 aggiungere degli elementi ad un array tramite splice
  `);

  let arr = [1, 2, 4, 5];
  arr.splice(2, 0, 3);                                                          // [1, 2, 3, 4, 5]
  console.log(arr);
}

//==============================================================================
// ex. 49 trovare l'indice di un elemento in un array tramite lastIndexOf
function ex49() {
  console.log(`
  ========================================================
  ex: 49 trovare l'indice di un elemento in un array tramite lastIndexOf
  `);

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12];   

  arr.splice(arr.lastIndexOf(9), 1);                                            // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  console.log(arr);
}

//==============================================================================
// ex. 50 riordinare un array tramite .sort
function ex50() {
  console.log(`
  ========================================================
  ex: 50 riordinare un array tramite .sort
  `);

  const fruit = ['pesche', 'mele', 'banane'];
  const scores = [1, 2, 10, 24, 55, 46, 5, 11, 3];
  const things = ['libri', 'Libri', '1 libro', '2 libri'];
  
  compareNumbers = (a, b) => a - b;                                             // 1,2,3,5,10,11,24,46,55
  
  console.log(`ordine crescente: ${scores.sort(compareNumbers)}` );             

   compareNumbersReverse = (a, b) => -1;                                        // 55,46,24,11,10,5,3,2,1
  
  console.log(`ordine decrescente: ${scores.sort(compareNumbersReverse)}` );
}

//==============================================================================
// ex. 51 .indexOf()
function ex51() {
  console.log(`
  ========================================================
  ex: 51 .indexOf()
  `);

  const noi = ['Luca', 'Riccardo', 'Gabriel', 'Mattia', 'Michela', 'Claudio'];

  console.log(noi.indexOf('Riccardo'));                                         // 1
  console.log(noi.indexOf('Gabriel', 3));                                       // lo cerca a partire dall'indice 3 e restituisce -1
  console.log(noi.indexOf('Gabriel'));                                          // 2
  console.log(noi.indexOf('Chiara'));                                           // -1

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

}

//==============================================================================
// ex. 52 .join()
function ex52() {
  console.log(`
  ========================================================
  ex: 52 .join()
  `);

  const marchi = ['Ferrari', 'Lamborghini', 'McLaren'];

  console.log(marchi.join(' + '));                                              // Ferrari + Lamborghini + McLaren
  console.log(marchi.join(' altrimenti '));                                     // Ferrari altrimenti Lamborghini altrimenti McLaren
  console.log(marchi.join(''));                                                 // FerrariLamborghiniMcLaren

}

//==============================================================================
// ex. 53 .values()
function ex53() {
  console.log(`
  ========================================================
  ex: 53 .values()
  `);

  const valori = ['a', 'b', 'c', 'd', 'e'];
  const estrai = valori.values();
  for (let lettere of estrai) {
  console.log(lettere);
  }

  /*
  restituisce:
  a
  b
  c
  d
  e
  */

}

//==============================================================================
// ex. 54 riordinare un array di oggetti tramite .sort()
function ex54() {
  console.log(`
  ========================================================
  ex: 54 riordinare un array di oggetti tramite .sort()
  `);
  
  let tv = [
    { modello: 'LG',        dimensione: '50',     prezzo: 680},
    { modello: 'Philips',   dimensione: '60',     prezzo: 750},
    { modello: 'Sony',      dimensione: '55',     prezzo: 540},
    { modello: 'Samsung',   dimensione: '70',     prezzo: 1100},
    { modello: 'Sharp',     dimensione: '65',     prezzo: 900}
  ];

  // tv.sort((a, b) => b.dimensione - a.dimensione);
  tv.sort((a, b) => a.prezzo - b.prezzo);

  console.table(tv);
}

//==============================================================================
// ex. 55 cambiare i valori di un array tramite .fill()
function ex55() {
  console.log(`
  ========================================================
  ex: 55 cambiare i valori di un array tramite .fill()
  `);

  let arr = [0, 1, 2, 3, 4, 5, 6, 7];

  // arr.fill(0);                                                                  // [0, 0, 0, 0, 0, 0, 0, 0]
  // arr.fill(0, 4);                                                               // [0, 1, 2, 3, 0, 0, 0, 0] primo indice compreso
  // arr.fill(0, 4, 6);                                                            // [0, 1, 2, 3, 0, 0, 6, 7] secondo indice escluso

  // arr1 = new Array(3);                                                          // crea un array con 3 elementi 'undefined'
  // arr1 = new Array(3).fill(1);                                                  // crea un array con 3 elementi [1, 1, 1]
  
  console.log(arr1)
}

//==============================================================================
// ex. 56 iterare un array di oggetti tramite .same
function ex56() {
  console.log(`
  ========================================================
  ex: 56 iterare un array di oggetti tramite .same
  `);

  let camere, disponibile;

  camere = [
    { numero: 10,     tipo: 'doppia',      libera: false},
    { numero: 13,     tipo: 'tripla',      libera: false},
    { numero: 17,     tipo: 'doppia',      libera: true},
  ];

  // let disponibile;                                                           // check fatto con forEach()

  // camere.forEach ((camera, i) => {
  //   if (camera.tipo === 'doppia' && camera.libera) {
  //     disponibile = true;
  //   }
  // });
  // console.log(disponibile);

  disponibile = camere.some ( camera => camera.tipo === 'doppia' && camera.libera);
  console.log(disponibile);
}

//==============================================================================
// ex. 57 restituire un nuovo array chiamato tramite array.from()
function ex57() {
  console.log(`
  ========================================================
  ex: 57 restituire un nuovo array chiamato tramite array.from()
  `);

  let a = 'ciao';
  let b = Array.from(a);                                                        // ['c', 'i', 'a', 'o']

let obj = {
  0   : 'P1',
  1   : 'P2',
  '2' : 'P3',
  length : 3
};

  let arr = Array.from (obj, v => `it_${v}`);                                   // duplica obj in arr e passa la callback aggiungendo it_ ad ogni valore dell'array

  console.log(arr);
}

//==============================================================================
// ex. 58
function ex58() {
  console.log(`
  ========================================================
  ex: 58
  `);

  let a = [1, 2, 3, 4, 5];
  let b = a;                                                                    // b prende gli stessi valori di a
  // b[0] = 100                                                                    // modifico il contenuto del riferimento. quindi 100 ci sarà sia in a che in b

  let c = a.slice();                                                            // copia a in c gli elementi primitivi. se ci fossero oggetti copia il riferimento invece degli elementi
  c[0] = 100;                                                                   // [0] = 100 solo in c e non in a

  let d = [1, 2, [ 3, 4], 5, 6];
  let e = d.slice();
  e[2][0] = 200;                                                                // copia un oggetto quindi copia la referenza e non l'elemento

  console.table( { d, e} );
}

//==============================================================================
// ex. 59 trasformare un array JavaScript in una stringa JSON e viceversa
function ex59() {
  console.log(`
  ========================================================
  ex: 59 trasformare un array JavaScript in una stringa JSON e viceversa
  `);

  let a = [1, 2, [ 3, 4], 5, 6];

  // let aInFormatoJson = JSON.stringify(a);                                       // JSON.stringify() trasforma un array JS in stringa JSON
  // let diNuovoArray = JSON.parse(aInFormatoJson);                                // JSON.parse() trasforma una stringa JSON in un oggetto JS

  let b = JSON.parse(JSON.stringify(a));                                        // JSON.parse() trasforma in oggetto JS quello che JSON.stringify() ha trasformato in stringa JSON
  b[2][0] = `ciao`;                                                             // b[2][0] modifica solo l'array di b senza toccare a
  console.table( { a, b } );
}

//==============================================================================
// ex. 60 prendere un array dentro altri array e creare un unicoi array con tutti i dati
function ex60() {
  console.log(`
  ========================================================
  ex: 60 prendere un array dentro altri array e creare un unico array con tutti i dati
  `);

  let a = [10, [20, 30], 40, [50, 60, [70, 80, 90]], 100];

  let b = a.reduce(nuoviValori, []);

  function nuoviValori(accumulatore, elemento) {
    if (Array.isArray(elemento)) {
      elemento.reduce(nuoviValori, accumulatore);
    } else {
      accumulatore.push(elemento);
    };
    return accumulatore;
  }
  console.log(b);
}

//==============================================================================
// ex. 61 mischiare casualmente gli elementi di un array con un altro
function ex61() {
  console.log(`
  ========================================================
  ex: 61 mischiare casualmente gli elementi di un array con un altro
  `);

  const nomi = ['Simone', 'Davide', 'Cristian', 'Luca'];
  const cognomi = ['Gatti', 'Sangiorgio', 'Stano', 'Savi'];

  function * generaNomiCasuali (nomi, cognomi) {
    while (nomi.length > 0) {
      let nomeIndex = (Math.random() * nomi.length) | 0,
          cognomeIndex = (Math.random() * cognomi.length) | 0,
          nome = nomi[nomeIndex],
          cognome = cognomi[cognomeIndex];

          nomi.splice(nomeIndex, 1);
          cognomi.splice(cognomeIndex, 1);
          yield { nome, cognome };
    }
  }

  const gen = generaNomiCasuali(nomi, cognomi);
  for (user of gen) {
    console.log(user);
  };
}

//==============================================================================
// ex. 62 error handling - video 144
function ex62() {
  console.log(`
  ========================================================
  ex: 62 error handling
  `);

  function fn() {
    fn();
  }

  try {
    fn() ;
  } catch (e) {
      console.dir(e);
  };
  console.log(1)
}

//==============================================================================
// ex. 63 troncare un numero all'intero
function ex63() {
  console.log(`
  ========================================================
  ex: 63 troncare un numero all'intero
  `);

  let number = 9.99;
  let truncNumber = Math.trunc(number);
  let truncWithOr = number | 0;

  console.log(truncNumber);
  console.log(truncWithOr);
}

//==============================================================================
// ex. 64 destrutturazione di un oggetto
function ex64() {
  console.log(`
  ========================================================
  ex: 64 destrutturazione di un oggetto
  `);

  let palazzo = {
    piani : 5,
    mq : 240,
    colore : 'rosso',
    numeroCamere : 21
  };

  let descrizione = function descriviPalazzo ( { piani, mq, colore} ) {
    return `piani= ${piani}, mq=${mq}, colore: ${colore}`;
  }
  console.log(descrizione);
}

//==============================================================================
// ex. 65
function ex65() {
  console.log(`
  ========================================================
  ex: 
  `);

  function fn ( nome = '' ) {
    let nomeIndicato = nome || 'Nessuno';
    console.log(nomeIndicato);
  }
  fn();                                                                         // Nessuno
  fn('Gabriel');                                                                // Gabriel
}

//==============================================================================
// ex. 66 node.js callback sincrona
function ex66() {
  console.log(`
  ========================================================
  ex: 66 node.js callback
  `);

  function sayHello ( name, callback ) {
    return callback ( `Hello ${name}!`);
  }

  console.log('prima');
  sayHello('Davide', result => console.log(result));
  console.log('dopo');
}

//==============================================================================
// ex. 67 
function ex67() {
  console.log(`
  ========================================================
  ex: 67
  `);

  contatore = (() => {
    contatorePrivato = 0
    
    cambia = (val) => {
      contatorePrivato += val
    }
    return {
      incrementa: () => {
        cambia(1)
      },
      decrementa: () => {
        cambia(-1)
      },
      valore: () => {
        return contatorePrivato
      }
    }
  })()

  console.log(contatore.valore()) // log 0
  contatore.incrementa()
  contatore.incrementa()
  console.log(contatore.valore()) // log 2
  contatore.decrementa()
  console.log(contatore.valore()) // log 1
}

//==============================================================================
// ex. 68 node.js callback asincrona
function ex68() {
  console.log(`
  ========================================================
  ex: 68 node.js callback asincrona
  `);

  function sayHelloAsync ( name, callback ) {
    process.nextTick (_ => callback ( `Hello, ${name}!`));
  }

  console.log('prima');
  sayHelloAsync('Davide', result => console.log(result));
  console.log('dopo');
}

//==============================================================================
// ex. 69 eseguire un'azione con setInterval e fermarlo con setTiomeout
function ex69() {
  console.log(`
  ========================================================
  ex: 69 eseguire un'azione con setInterval e fermarlo con setTiomeout
  `);

  let int = setInterval ( ()  => {
    console.log('ciao');
    }, 1000 )
    
    setTimeout ( () => {
      clearInterval(int);
    }, 10000)

}

//==============================================================================
// ex. 70 promise
function ex70() {
  console.log(`
  ========================================================
  ex: 70 promise
  `);

  const promiseTest = function(par1) {
    return new Promise((resolve, reject) => {
       if(par1) {
          resolve(true)
       } else {
          reject(false);
       }
    })};
    
    promiseTest();
}

//==============================================================================
// ex. 71 destructuring
function ex71() {
  console.log(`
  ========================================================
  ex: 71 destructuring
  `);
  
  let userArray = ['sex', 'username', 'mail', 'phone', 'age'];
  let userObj = {};
  [, userObj.username, userObj.email ] = userArray;

  console.log(userObj); // {username: "jdoe", email: "john@doe.com"}
}

//==============================================================================
// ex. 72
function ex72() {
  console.log(`
  ========================================================
  ex: 
  `);

  let arrNum = [1, 2, 3, 4, 5, 6, 7];
  let arrNom = ['Gabriel', 'Mattia', 'Riccardo', 'Federica'];

  if (arrNum.length > 5 && arrNom.length === 4) { console.log(`è tutto vero!!!!!!!!!!!`);} 
  else {`no no no è falso`};

  let people = 6;
  let tempo = 'sole';
  let prenotation = 1;
}

//==============================================================================
// ex. 73
function ex73() {
  console.log(`
  ========================================================
  ex: 
  `);

  let punti = [1, 45, 99, 55, 46, 71, 33, 42, 85]
  let maxPunti = [], puntiMin = 80;

  for ( i = 0; i <= punti.length; i++) {
    if ( punti[i] > puntiMin ) { maxPunti.push(punti[i]) };
  }
  console.log(maxPunti);
}

//==============================================================================
// ex. 74 reduce
function ex74() {
  console.log(`
  ========================================================
  ex: reduce
  `);

  let arrNum = [2, 3, 4, 5, 6, 7, 0];
  let reducer = ( total, value ) => total + value;

  console.log(arrNum.reduce(reducer));
}

//==============================================================================
// ex. 75 loop array
function ex75() {
  console.log(`
  ========================================================
  ex: loop array
  `);

  let master = 'Paolo Borzacchiello';

  let course = { 
      name: 'master 1',
      level: 'one',
      args: 'sales',
      modules: [
        {
          id: '123456789',
          trainer: 'Paolo Borzacchiello'
        }
      ]  
    };
    
  for (let prop in course.modules) {
    // console.log(prop);
    // console.log(course[prop]);
    if (course.modules[prop].trainer === master)  {
       console.log('eccolo') 
      } else {
        console.log('ancora niente');
      } 
  } 
}

//==============================================================================
// ex. 76 diversi tipi di arrow function
function ex76() {
  console.log(`
  ========================================================
  ex: diversi tipi di arrow function
  `);

  // funzione classica
  let test = function(){
    return 1;
  }

  // arrow function che restituisce 2 valori
  let  test2 = (arg1, arg2) => {
  console.log(arg1);
  return  arg1*arg2;
  }

  // arrow function che restituisce 1 valore
  let test3 = () => 2+2;

  let test4 = (arg1, arg2) => arg1+ arg2;

  let test5 = arg1 => arg1*2;
  console.log(test5(7));

  let test6 = arg1 => {
  console.log('test');
  return arg1*2;
  }
  
}

//==============================================================================
// ex. 77 arrow function e this - video 141 corso Node.js Master. Da zero a esperti in API e Javascript ES67
function ex77() {
  console.log(`
  ========================================================
  ex: arrow function e this
  `);

  let obj = {
    name : 'Gabriel',

    displayName: function() {
      console.log(this.name);
    }
  };

  obj.displayName();

  //------------------------
  //------------------------
  
  let name1 = 'Gabriel';
  
  displayName1 = function() {
    console.log(name1);
  }
  displayName1();
};

//==============================================================================
// ex. 78 arrow function e spread operator
function ex78() {
  console.log(`
  ========================================================
  ex: arrow function e spread operator
  `);

  // calc = (operation, ...a) => console.log(a);
  // calc('+', 2, 3, 4, 5, 6, 7, 8);

}

//==============================================================================
// ex. 79
function ex79() {
  console.log(`
  ========================================================
  ex:
  `);

  const some = 'ecco una stringa';
  const someIte = [...some];

  console.log(someIte.length);

}
// ex79()
//==============================================================================
// ex. 80 destructuring assignment
function ex80() {
  console.log(`
  ========================================================
  ex: destructuring assignment
  `);

  let [ a, b, c] = [10, 20, 30];

  console.log(a + b + c);

}
// ex80();
//==============================================================================
// ex. 81
function ex81() {
  console.log(`
  ========================================================
  ex: 81
  `);

  
  let exercise = setInterval(function() {
    let number = 1;
    console.log(`Here is message number ${number}`);
    number = number + 1;
  }, 2000);
  
  setTimeout( function() {
    clearInterval(exercise);
  }, 12000);
}
// ex81();
//==============================================================================
// ex. 82
function ex82() {
  console.log(`
  ========================================================
  ex: 82
  `);


}
// ex82();
//==============================================================================
// ex. 82
function ex83() {
  console.log(`
  ========================================================
  ex: 83
  `);


}
// ex83();
//==============================================================================
// ex. 84
function ex84() {
  console.log(`
  ========================================================
  ex: 84
  `);


}
// ex84();