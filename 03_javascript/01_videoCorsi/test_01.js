//==============================================================================
// ex. 01 metodi dell'array
function ex01 () {
  let numbers = [2, 3, 4, 7, 5, 6];

  console.log(`
  ========================================================
  ex: 01 metodi degli array
  `);
  // .find => restituisce il primo elemento che soddisfa la condizione
  numbers1 = numbers.find(el => el > 5);                                        // 7

  // .map => restituisce un array di elementi true e false che soddisfano la consizione. inoltre é distruttivo in quanto modifica l'array
  numbers2 = numbers.map(el => el > 5);                                         // [false, false, false, true, false, true]

  // .filter => restituisce gli elementi che soddisfano la consizione
  numbers3 = numbers.filter(el => el > 5);                                      // [7, 6]

  // .join converte in stringa l'array inserendo un separatore (opzionale)
  numbers4 = numbers.join(' - ');                                               // 2 - 3 - 4 - 7 - 5 - 6

  // .some itera gli elementi dell'array e restituisce 'true' o 'false' se almeno uno soddisfa la condizione
  numbers5 = numbers.some( x => x === 3);                                       // true
  numbers6 = numbers.some( x => x === 1);                                       // false

  // .every restituisce 'true' o 'false' se tutti gli elementi dell'array soddisfano la condizione
  numbers7 = numbers.every( x => x > 0 && x <= 10);                             // true
  numbers8 = numbers.every( x => x > 0 && x <= 6);                              // false

  console.log();
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
    this.name = nome;                                                             // tramite this. possiamo assegnare valori diversi per ogni singolo oggetto user1 e user2
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

  // console.log(obj2);                                                            //{p5: 'v5', p6: 'v6', p7: 'v7', p8: 'v8'}

  // Object.setPrototypeOf(obj2, obj1);                                            // assegna a obj2 le proprietá di obj1

  // for (a in obj2) {
  //   console.log(a, obj2[a]);
  // }

  // let items = Object.keys(obj2);                                                // mi da le KEYS dell'oggetto
  // console.log(items);                                                           // (4) ['p5', 'p6', 'p7', 'p8']  

  // let items = Object.values(obj2);                                              // mi da le VALUES dell'oggetto
  // console.log(items);    
}

//==============================================================================
// ex. 22 sostituire i caratteri di una stringa
function ex22() {
  console.log(`
  ========================================================
  ex: 22 sostituire i caratteri di una stringa 
  `);

  // describe("maskify", function() {
  //   it("should work for some examples", function(){
  //     Test.assertEquals(maskify('4556364607935616'), '############5616');
  //     Test.assertEquals(maskify('1'), '1');
  //     Test.assertEquals(maskify('11111'), '#1111');
  //   });
  // });

  function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);                   // .slice restituisce l'index indicato () = tutto. (inizio). (inizio, fine)
  }
  let newString = maskify('4556364607935616');
  console.log(newString);
}

//==============================================================================
// ex. 23 prendere una stringa e fare il return in binary
function ex23() {
  console.log(`
  ========================================================
  ex: 23 prendere una stringa e fare il return in binary
  `);

  function addBinary(a, b) {
    return `${(a + b).toString(2)}`;
  }
  let newString = addBinary(1, 2);                                              // in binario 1 = 1 e 2 = 10
  console.log(newString);
}

//==============================================================================
// ex. 24 confrontare 2 array e rimuovere gli elementi di A presenti in B
function ex24() {
  console.log(`
  ========================================================
  ex: 24 confrontare 2 array e rimuovere gli elementi di A presenti in B
  `);

  let array1 = [1, 3, 4, 5, 7, 8, 9, 10, 11];
  let array2 = [2, 4, 6, 8, 10];
  let array3 = array1.filter(x => !array2.includes(x));                         // mi restituisce gli elementi di array1 che NON sono presenti in array2
  let array4 = array1.filter(x => !array2.includes(x)).concat(array2.filter(x => !array1.includes(x)));
  let array5 = array1.filter(x => array2.includes(x));                          // mi restituisce gli elementi di array1 presenti in array2
  // console.log(array3);
  // console.log(array4);
  console.log(array5);
}

//==============================================================================
// ex. 25 restituire `pari` o `dispari` a seconda del numero - LET
function ex25() {
  console.log(`
  ========================================================
  ex: 25 restituire 'Even' o 'Odd' a seconda del numero - LET
  `);

  let numbers1 = 2;
  let numbers2 = 9;
  let numbers3 = 877;
  let numbers4 = 990;
  let numbers5 = 234;

 function check (x) {
    if ( x % 2 === 0 ) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  console.log(`${numbers1} is ${check(numbers1)}`);
}

//==============================================================================
// ex. 26 restituire `pari` o `dispari` a seconda del numero - ARRAY
function ex26() {
  console.log(`
  ========================================================
  ex: 26 restituire 'Even' o 'Odd' a seconda del numero - ARRAY
  `);

  let numbers = [2, 9, 877, 990, 234];

  for (i = 0; i < numbers.length; i++) {   
      if ( i % 2 === 0 ) {
        console.log(`${i} is a number Even`);
      } else {
        console.log(`${i} is a number Odd`);
      }
  }
}

//==============================================================================
// ex. 27 prendere una stringa, separarla e creare un array con tutti gli elementi separati
function ex27() {
  console.log(`
  ========================================================
  ex: 27 prendere una stringa, separarla e creare un array con tutti gli elementi separati
  `);

  let str = 'jkhdfabvjadfhiubajinkjsdvopueqwmnvc';
  console.log(`la stringa é ${str}`);
  let arr = str.split('');
  console.log(`l'array creato é ${arr}`);
  console.log(str[2]);
  console.log(str.replace(str, 'questa é la nuova stringa da restituire'));
}

//==============================================================================
// ex. 28 this: this: é il riferimento all'attuale contesto di esecuzione (in modo implicito)
function ex28() {
  console.log(`
  ========================================================
  ex: 28 this: é il riferimento all'attuale contesto di esecuzione (in modo implicito)
  `);
  
  function test() {
    console.log(this.p1);
  }

  let obj1 = {
    p1 : 20,
    fn : test
  };

  let obj2 = {
    p1 : 40,
    fn : test
  };
  
  obj1.fn();
  obj2.fn();
}

//==============================================================================
// ex. 29 bind, call, apply: riferimenti ad un contensto (in modo esplicito)
function ex29() {
  console.log(`
  ========================================================
  ex: 29 bind, call, apply: riferimenti ad un contensto (in modo esplicito)
  `);

  let obj1 = {
    nome : 'Marco'
  };

  let obj2 = {
    nome : 'Francesca'
  };

  function saluta(cittá, lavoro) {
    console.log(`ciao sono ${this.nome}. Abito ${cittá} e faccio il ${lavoro}`);
  }

  saluta('Milano', 'dottore');                                                  // nome é 'undefined' perché 'nome' non é associato ad alcun oggetto.
  saluta.call(obj1, 'Milano', 'dottore');                                       // nome é associato all'oggetto 'obj1'.
  saluta.call(obj2, 'Pavia', 'chirurgo');                                       // nome é associato all'oggetto 'obj2'.
  saluta.apply(obj1, ['Milano', 'dottore']);                                    // con 'apply' gli elementi devono essere passati come array
  saluta.apply(obj2, ['Pavia', 'chirurgo']);
  let rif1 = saluta.bind(obj1);                                                 // 'bind' associa alla funzione l'oggetto passato come parametro e restituisce un riferimento alla funzione
  rif1('Como', 'pilota');
}

//==============================================================================
// ex. 30 trovare la radice quadrata di un numero
function ex30() {
  console.log(`
  ========================================================
  ex: 30 trovare la radice quadrata di un numero
  `);
  
    let a = 16;
    let b = Math.pow(a, 1 / 2);
    let c = Math.pow(a, 1 / 3);
    let d = Math.pow(a, 1 / 4);
    let e = Math.pow(a, 1 / 5);
    let f = Math.pow(a, 0.5);
        
    /*
    Trovare l'ennesima radice è l'inverso di elevare all'ennesima potenza. Ad esempio 2 alla potenza
    di 5 è 32 . La quinta radice di 32 è 2 .
    */

    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}

//==============================================================================
// ex. 31 arrotondare i valori
function ex31() {
  console.log(`
  ========================================================
  ex: 31 arrotondare i valori
  `);
  
  let a = 2.3;
  let b = 2.5;
  let c = 2.7;
  let d = 2.1;
  let e = -1.1;
  let f = 2 / 3;                                                                // 0.6666666666666666
  let g = 10000 / 3;                                                            // 3333.3333333333335
  let h = 1                                                                     // ogni zero messo dopo l'1 diventa un numero dopo la virgola
  let i = 10
  let j = 100


  console.log(Math.round(a));                                                   // Math.round() arrotonda al valore all'intero piú vicino
  console.log(Math.round(b));
  console.log(Math.round(c));

  console.log(Math.ceil(a));
  console.log(Math.ceil(d));                                                    // Math.ceil() arrotonda al valore intero superiore 
  console.log(Math.ceil(e));                                                     

  console.log(Math.floor(a));                                                   // Math.floor() arrotonda al valore intero inferiore 
  console.log(Math.floor(c));
  console.log(Math.floor(e));

  console.log(Math.round(f * 100) / 100);                                       // 0.67 é il numero arrotondato al decimale
  console.log(Math.round(g * h) / h);                                           // 3333
  console.log(Math.round(g * i) / i);                                           // 3333.3
  console.log(Math.round(g * j) / j);                                           // 3333.33

}  

//==============================================================================
// ex. 32 call di un oggetto o di un array
function ex32() {
  console.log(`
  ========================================================
  ex: 32 call di un oggetto o di un array
  `);
 
  let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
   };
   
   for(let key in obj) {
     console.log(`obj = ${key, obj[key]}`);
   }

   let array = [
    { key1: 'value1' },
    { key2: 'value2' },
    { key3: 'value3' }
   ];

   for(i in array) {
    console.log(array[i]);
    i++;
  }
}

//==============================================================================
// ex. 33 creare una classe con una constructor function
function ex33() {
  console.log(`
  ========================================================
  ex: 33 creare una classe con una constructor function
  `);
  
  function User(nome, anni) {                                                   // creo un oggetto da una constructor function
    this.nome = nome;
    this.anni = anni;
  }

  let gabriel = new User('Gabriel', 35);
  console.log(gabriel);

  class UserClass {                                                             // creo un oggetto da una classe
    constructor(nome, anni) {
      this.nome = nome;
      this.anni = anni;
    }
  }

  let sara = new UserClass('Sara', 30);
  console.log(sara);
}

//==============================================================================
// ex. 34 accedere alla proprietá di un oggetto
function ex34() {
  console.log(`
  ========================================================
  ex: 34 accedere alla proprietá di un oggetto
  `);
  
  let user = {
    name : 'gabriel',                                                           // internamente JS trasforma le chiavi delle proprietá in stringhe
    anni : 35,
    'buon giorno' : 'hola'
  };
  
  let nome = 'name';                                                            // le proprietá di un obj vanno richiamate come stringhe
  
  console.log(`user[nome] = ${user[nome]}`);                                    // le proprietá che sono stringhe si richiamano tra []
  console.log(`user.name = ${user.name}`);
}

//==============================================================================
// ex. 35 creare piú oggetti con sintassi letterale e con constructor function
function ex35() {
  console.log(`
  ========================================================
  ex: 35 creare piü oggetti con sintassi letterale e con constructor function
  `);

// funzioni letterali ----------------------------------------------------------

  let user1 = {
    name : 'mattia',
    descrivimi : function() {
      return `Nome utente chiamato : ${this.name}`;
   }
  }

  let user2 = {
    name : 'jessica',
    descrivimi : function() {
      return `Nome utente chiamato : ${this.name}`;
   }
  }

  let user3 = {
    name : 'claudio',
    descrivimi : function() {
       return `Nome utente chiamato : ${this.name}`;
    }
  }

  console.log(user3.descrivimi());

// factory function ------------------------------------------------------------

  function user(nome) {
    obj = {
      name : nome,
      descrivimi : function() {
        return `Nome utente chiamato : ${this.name}`;
     }
    }
    return obj;
  }

  let user4 = user('millionDollarMarasita');
  console.log(user4.descrivimi());

// constructor function --------------------------------------------------------

  function utenti(nome) {
    this.name = nome;
    this.descrivimi = function() {
       return `Nome utente chiamato : ${this.name}`;
    };
  };

  let user5 = new utenti('michele');
  let user6 = new utenti('paolo');
  let user7 = new utenti('luca');

  console.log(user5.descrivimi());
}

//==============================================================================
// ex. 36 funzione con dati pubblici e privati
function ex36() {
  console.log(`
  ========================================================
  ex: 36 funzione con dati pubblici
  `);
 
  function dati(name, altezza) {
    this.name = name;
    this.altezza = altezza;
    this.pesoIdeale = function () {
      return `Peso ideale = ${this.calcolaPesoIdeale() }`;
    };
    this.calcolaPesoIdeale = function () {
      return Math.ceil((altezza - 100) * 0.95);                                 // Math.ceil()
    };
  }

  let dati1 = new dati('gabriel', 175);
  console.log(dati1.pesoIdeale());
}

//==============================================================================
// ex. 37 funzione con dati privati
function ex37() {
  console.log(`
  ========================================================
  ex: 37 funzioni con dati privati
  `);
 
    function dati(name, altezza) {
      let privata = `informazione privata`;
      this.name = name;
      this.altezza = altezza;
      this.pesoIdeale = function () {
        return `Peso ideale = ${calcolaPesoIdeale()}`;
      }
      let calcolaPesoIdeale = function () {
        return Math.ceil((altezza - 100) * 0.95);
      }
    }
    let dati1 = new dati(`riccardo`, 180);
    console.log(dati1.pesoIdeale());
    console.log(dati1.privata);
}

//==============================================================================
// ex. 38 arrotondare un numero alle decine o alle centinaia
function ex38() {
  console.log(`
  ========================================================
  ex: 38 arrotondare un numero alle decine o alle centinaia
  `);
 
  let myNum = 10000 / 3;
  let a = 0.01;                                                                 // 1 / 100
  let b = Math.round(myNum * a) / a;
  let c = 0.1;                                                                 // 1 / 10
  let d = Math.round(myNum * c) / c;

  console.log(b);  
  console.log(d);  

}

//==============================================================================
// ex. 39 funzione per arrotondare un numero
function ex39() {
  console.log(`
  ========================================================
  ex: 39 funzione per arrotondare un numero
  `);

  function roundTO (value, quantity) {
    let power = Math.pow(10, quantity);
    return Math.round(value * power) / power;
  } 
  let myNum = 10000 / 3;                                                        // 3333.3333333333335
  console.log(roundTO(myNum, 2));                                               // 3333.33
  console.log(roundTO(myNum, 1));                                               // 3333.3
  console.log(roundTO(myNum, 0));                                               // 3333
}

//==============================================================================
// ex. 40 
function ex40() {
  console.log(`
  ========================================================
  ex: 
  `);
 
  console.log(Math.random() * (10 - 1) + 1);

}
