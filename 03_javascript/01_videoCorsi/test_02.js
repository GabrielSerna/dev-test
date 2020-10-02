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
  const scores = [01, 2, 10, 24, 55, 46, 05, 11, 3];
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

