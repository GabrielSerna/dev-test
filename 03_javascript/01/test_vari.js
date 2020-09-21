//==============================================================================
// ex. 01 metodi dell'array
function ex01 () {
  let numbers = [2, 3, 4, 7, 5, 6];

  console.log(`
  ========================================================
  ex: 01 metodi degli array
  `);
  // .find => restituisce il primo elemento che soddisfa la condizione
  console.log(numbers.find(el => el > 5));                                        // 7

  // .map => restituisce un array di elementi true e false indicando se soddisfa la consizione. inoltre é distruttivo in quanto modifica l'array
  // console.log(numbers.map(el => el > 5));                                      // [false, false, false, true, false, true]

  // .filter => restituisce gli elementi che soddisfano la consizione
  console.log(numbers.filter(el => el > 5));                                      // [7, 6]

  // .join converte in stringa l'array inserendo un separatore (opzionale)
  console.log(numbers.join(' - '));                                               // 2 - 3 - 4 - 7 - 5 - 6
}

//==============================================================================
// ex. 02 operatore ternario ?
let valutazione, voto = 22;

function ex02() {
  console.log(`
  ========================================================
  ex: 02 operatore ternario '?'`
  );

  if (voto > 18) {
    valutazione = true;
  } else {
    valutazione = false;
  }
  console.log(valutazione);
}

function ex02a() {
  console.log(`
  ========================================================
  ex: 02 operatore ternario '?'`
  );
  valutazione = voto >= 18 ? true : false;
  console.log(valutazione);
}

//==============================================================================
// ex. 03 switch
function ex03 () {
  let votoRicevuto = 6
  let valutazione01;

  console.log(`
  ========================================================
  ex: 03 switch`
  );

  switch (votoRicevuto) {
    case 1 : valutazione01 = 'pessima'; break;
    case 2 : valutazione01 = 'migliorabile'; break;
    case 3 : valutazione01 = 'stai migliorando'; break;
    default : valutazione01 = 'ottimo'; break;                                  // default restituisce qualunque valore diverso dai 'case'
  }
  console.log(valutazione01);
}

//==============================================================================
// ex. 04 oggetti e le loro proprietá
function objs() {
  let Ferrari = {
    modello : '458',
    motore : {
      cilindrata : '1600',
      cavalli : '720',
      coppia_max : '900'
    }
  }

  console.log(`
  ========================================================
  ex: 04 oggetti e proprietá`
  );

  console.log(Ferrari.modello);                                                 // stampa il valore della proprietá dell'oggetto
  console.log(Ferrari.motore.cavalli);                                          
}

//==============================================================================
// ex. 05 stringa da modificare
function ex05() {
  console.log(`
  ========================================================
  ex: 05 stringa da modificare`
  );

  let str = 'stringa da modificare'
  let arr = str.split(' ');                                                     // separa la stringa al carattere indicato creando un array comnposto dagli elementi separati

  for ( let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }

  str = arr.join(' ');                                                          // crea una stringa unendo gli elementi di un array separandoli dal carattere indicato
  console.log(str);                                                             // stampa "Stringa Da Modificare"
}

//==============================================================================
// ex. 06 trovare la posizione di un carattere e sostituirlo con qualcos'altro
function ex06() {
  console.log(`
  ========================================================
  ex: 06 trovare un indice e modificarlo`
  );

  let str = 'maestro %. Corso su Udemy.';
  let sostituisci = 'Javascript';
  let pos = str.indexOf('%');

  console.log(str);
  console.log(`l'indice che voglio sostituire é '%' che si trova alla posizione ${pos}`);

  str = str.slice(0, pos) + sostituisci + str.slice(pos + 1);

  console.log(str);
}

//==============================================================================
// ex. 07 stroncare una stringa dopo 16 caratteri
function ex07 () {
  console.log(`
  ========================================================
  ex: 07 stroncare una stringa dopo 16 caratteri`
  );

  let str = `questa é la stringa da stroncare dopo 16 caratteri`;
  let strL = str.length;
  console.log(`${str} ed é lunga ${strL} caratteri`);

  str = str.length > 16 ? str.substring(0, 16).concat(`...`) : str;
  console.log(str);
}

//==============================================================================
// ex. 08 funzione che restituisce un'altra funzione
function ex08() {
  console.log(`
  ========================================================
  ex: 08 funzione che restituisce una funzione`
  );

  function ciao() {                                                             // una funzione che riceve come parametro un'altra funzione si chiama funzione di ordine superiore
    return 'ciao';
  };

  function arrivederci() {
    return 'arrivederci';
  };

  function saluta(salutoFn) {
    console.log(`${salutoFn()}`);                                               // dichiaro che il parametro ricevuto é una funzione
  };

  saluta(ciao);                                                                 // una funzione passata come parametro di un'altra funzione viene chiamato CALLBACK
  saluta(arrivederci);                                                          // una funzione passata come parametro di un'altra funzione viene chiamato CALLBACK
  saluta(function() {                                                           // dichiaro una nuova funzione all'interno della funzione 'saluta'
    return 'salve'                                                              
  });
}

//==============================================================================
// ex. 09 function e arguments
function ex09() {
  console.log(`
  ========================================================
  ex: 09 function e arguments`
  );

  function test() {
    for (let elenco of arguments) {                                             // arguments crea un array contenente gli elementi passati alla funzione come parametro
      console.log(elenco);
    }
  }
  test(1, 'stringa', 7, true);
}

//==============================================================================
// ex. 10 spread operator '...'
function ex10() {
  console.log(`
  ========================================================
  ex: 10 spread operator '...'`
  );
  
  let numeri = [1, 2, 0.2, 8, 10, 20, 100, 7.5];
  let min = Math.min(...numeri);                                                // '...' lo spread operator permette di passare gli oggetti contenuti nell'array
  let max = Math.max(...numeri);
  console.log(`il valore miniimo dell'array 'numeri' é ${min}`);
  console.log(`il valore massimo dell'array 'numeri' é ${max}`);

  let uno = ['a', 'b', 'c'];
  let due = ['d', 'e', 'f'];
  let tre = [...uno, ...due];
  console.log(`
  i due array uniti formano ${tre}`
  );
}

//==============================================================================
// ex. 11 function expression                                                   // é una funzione assegnata ad una variabile e la funzione viene invocata immediatamente (IIFE)
function ex11() {
  console.log(`
  ========================================================
  ex: 11 function expression

  scrivere:
  let calcola = (function() {

  })();

  equivale a scrivere:
  let calcola2 = function() {

  }
  calcola2();`
  );
}

//==============================================================================
// ex. 12 arrow function
function ex12() {
  console.log(`
  ========================================================
  ex: 12 arrow function`
  );

  let a = [1, 2, 3, 4, 5, 10, 15, 30];
  console.log(a);

  let b = a.filter( x => x%2 === 0);

  console.log(`gli elementi pari sono ${b}`);
}

//==============================================================================
// ex. 13 constructor function
function ex13() {
  console.log(`
  ========================================================
  ex: 13 constructor function`
  );
  function User() {                                                             // la funzione é un oggetto vuoto

  }

  User.prototype.p1 = 10;                                                       // crea l'oggetto p1 dentro User                                         
  User.prototype.p2 = x => x ** 2;                                              // crea la funzione p2 dentro User

  console.log(User.prototype.p1);
  console.log(User.prototype.p2(3));
}

//==============================================================================
// ex. 14 constructor function e this
function ex14() {
  console.log(`
  ========================================================
  ex: 14 constructor function e this`
  );

  function User(nome) {
    this.name = nome;                                                             // tramite this possiamo assegnare valori diversi per ogni singolo oggetto user1 e user2
    this.age = null;
    this.type = 'Utente Standard';
  }

  let user1 = new User();                                                       // creo la variabile e assegno l'elemento da trasmettere successivamente
  let user2 = new User();
  let user3 = new User("Mario");                                                // passo l'elemento direttamente quando dichiaro la variabile

  user1.name = 'Luca';                                                          // assegno alla proprietá name di user1 il valore Luca
  user2.name = 'Claudio';                                                       // assegno alla proprietá name di user2 il valore Claudio
 
  console.log(user1);
  console.log(user2);
  console.log(user3);
}

//==============================================================================
// ex. 15 elevare un numero alla potenza
function ex15() {
  console.log(`
  ========================================================
  ex: 15 elevare un numero alla potenza`
  );

  function potenza(x, n) {
    if ( x === 1) {
      return 1;
    } else {
    return n === 1 ? x : x * potenza(x, --n);
    }
  }  
    let ris = potenza(5, 3);

    console.log(ris);
}

//==============================================================================
// ex. 16 crea stringa casuale
function ex16() {
  console.log(`
  ========================================================
  ex: 16 crea stringa casuale`
  );

  function creaStringaCasuale(n) {
    const caratteri = `abcdefghi1234567890`;
    const lunghezza = caratteri.length;
    let casuale = '';
    for(let i = 0; i < n; i++) {
      casuale += caratteri[Math.floor(Math.random() * lunghezza)];
    }
    return casuale;
  }

  const pwd = creaStringaCasuale(15);
  console.log(pwd);
}

//==============================================================================
// ex. 17 funzione che inverte il contenuto di una stringa
function ex17() {
  console.log(`
  ========================================================
  ex: 17 funzione che inverte il contenuto di una stringa`
  );

  let invertiStringa = (str) => str.split('-').reverse().join('-');
  
  let invertita = invertiStringa(`01-02-03-04-05-06-07-08-09-10`);
  console.log(invertita);
}

//==============================================================================
// ex. 18 richiamare le proprietá di un oggetto
function ex18() {
  console.log(`
  ========================================================
  ex: 18 richiamare le proprietá di un oggetto`
  );

  let utente = {
    primo : `validatore valido richiamato con 'obj.proprietá'`,
    4 : `validatore numerico richiamato con 'obj[]'`,
    'secondo test' : 'altro validatore'
  };

  console.log(utente.primo);
  console.log(utente["secondo test"]);
  console.log(utente[4]);                                                       // quando la proprietá ha un identificatore non valido va messa senza '.' e va messa tra '[]'
  console.log(utente[1+3]); 	                                                  // JS prima esegue l'espressione all'interno delle parentesi [] e poi ricerca la proprietá
  console.log(utente[2*2]);
  console.log(utente[8/2]);
  console.log(utente[2**2]);
  console.log(utente[5-1]);

  let iniziale = 'primo';                                                       // la proprietá 'primo' dell'oggetto utente deve essere passata come stringa per essere richiamata

  console.log(utente[iniziale]);
}

//==============================================================================
// ex. 19 esporre solo il necessario - video 45 da rivedere
function ex19() {
  console.log(`
  ========================================================
  ex: 19 esporre solo il necessario`
  );

  function persona(name, altezza) {
    let privata = `questa variabile é un'informazione privata`;                 // non ritorna fuori dalla funzione
    this.name = name;
    this.altezza = altezza;
    this.pesoIdeale = function() {
      return `il tuo peso ideale é ${calcolaPesoIdeale()}kg`;
    };
    let calcolaPesoIdeale = () => altezza - 100 * 0.95;                         // non ritorna fuori dalla funzione
  }
  persona.prototype.type = "Utente Standard";

  let persona1 = new persona('Simone', 175);
  console.log(persona1.pesoIdeale());
}

//==============================================================================
// ex. 20 proprietá e protpotipi
function ex20() {
  console.log(`
  ========================================================
  ex: 20 proprietá e prototipi. gerarchia dei prototipi
  video 46
  `);

  let ferrari = {
    Marchio : `Ferrari`,
    dal : 1921,
    colore : `rosso`
  };

  let ferrari_458 = Object.create(ferrari);
  ferrari_458.cilindrata = 2000;                                                // aggiungo le proprietá cilindrata, cavalli, colore
  ferrari_458.cavalli = 680;
  // ferrari_458.colore = `rosso opaco`;                                        // se non indico il colore e poi lo richiamo mi prende il colore dell'oggetto padre 

  let ferrari_458_special = Object.create(ferrari_458);
  ferrari_458_special.colore = 'nero';

  console.log(ferrari_458_special.colore);
  console.log(`
  ferrari é il padre
  ferrari_458 é figlio di ferrari e padre di ferrari_458_special
  ferrari_458_special é figlio di ferrari_458`);
}

//==============================================================================
// ex. 21 getPrototypeOf e setPrototypeOf - prendere e assegnare proprieta da un oggetto ad un altro oggetti
function ex21() {
  console.log(`
  ========================================================
  ex: 
  video 49
  `);

  let obj1 = {   
    p1 : 'v1',
    p2 : 'v2',
    p3 : 'v3',
    p4 : 'v4'
  };

  let obj2 = {
    p5 : 'v5',
    p6 : 'v6',
    p7 : 'v7',
    p8 : 'v8'
  };

  // console.log(obj2);                                                         //{p5: 'v5', p6: 'v6', p7: 'v7', p8: 'v8'}

  Object.setPrototypeOf(obj2, obj1);                                            // assegna a obj2 le proprietá di obj1

  console.log(obj2.p1);
}

//==============================================================================
// ex. 22
function ex22() {
  console.log(`
  ========================================================
  ex: 
  video 
  `);
}

//==============================================================================
// ex. 23
function ex() {
  console.log(`
  ========================================================
  ex: 
  video 
  `);
}

//==============================================================================
// ex. 24
function ex() {
  console.log(`
  ========================================================
  ex: 
  video 
  `);
}
