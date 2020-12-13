//==============================================================================
// DATI PRIMITIVI
let ex01 = () => {

  // string
  const nome = 'Gabriel';
  console.log(typeof nome);

  // Number
  let anni = 35;
  console.log(typeof anni);

  // Boolean
  let eMaggiorenne = true
  console.log(typeof eMaggiorenne);

  // Null
  const valore = null
  console.log(typeof valore);
  console.warn('è un bug. JS restituisce un Obj se gli si chiede il typeof di Null');

  // Undefined
  let sesso;
  console.log(typeof sesso);

  // Symbol


}

//===============================================================================
// DATI DI REFERIMENTO (REFERENCE TYPE)
let ex02 = () => {

  // Array
  const nomi = ["Gabriel", "Sara", "Lola"];
  console.log(typeof nomi);

  // Object
  const persona = {
    name: "Gabriel",
    age:  35,
    sex:  "Male"
  }
  console.log(typeof persona);
  persona.name = "Juan";
  console.log(persona);


  // Function


}

//==============================================================================
// TYPE CONVERTION
let ex03 = () => {

  // 1. Number to String
  let age;
  age = 35
  value = String(age);
  console.log(value);
  console.log(typeof value);

  // toString()
  year = 2020
  thisYear = year.toString();
  console.log(thisYear);
  console.log(typeof thisYear);

  // 2. String to Number
  valueN = '30';
  newValue = Number(valueN);
  console.log(newValue);
  console.log(typeof newValue);
  
  // 3. Boolean to Number
  let val = true
  newVal = Number(val);
  console.log(newVal);

  // parseInt and parseFloat
  numbers = parseInt('103.56');     //103
  numbers = parseFloat('103.56');   //103.56
  console.log(numbers);
  console.log(typeof numbers);

}

//==============================================================================
// TYPE COERCION (quando 2 variabili/valori di natura diversa si incrociano)
let ex04 = () => {


}

//==============================================================================
// NUMERI
let ex05 = () => {

  let num1 = 24
  let num2 = 6
  let risultato = num1 % num2;
  // OGGETTO MATH.

  // Math.PI
  risultato = Math.PI                 // 3.141592653589793
  // Math.round()
  risultato = Math.round(42.5);       // 43 arrotonda
  // Math.ceil()
  risultato = Math.ceil(42.3)         // 43 restituisce l'intero superiore
  // Math.floor()
  risultato = Math.floor(42.8)        // 42 restituisce l'intero inferiore
  // Math.sqrt()
  risultato = Math.sqrt(81)           // 9 restituisce la radice quadrata
  // Math.abs()
  risultato = Math.abs(-5)            // 5 
  // Math.pow()
  risultato = Math.pow(3, 3)          // 27 restituisce la potenza di 2 numeri
  // Math.min()
  // Math.max()
  // Math.random()
  risultato = Math.ceil(Math.random()*100);

  console.log(risultato);
}

//==============================================================================
// STRINGHE
let ex06 = () => {

  let name = "Juan Gabriel Serna Torres";
  let risultato;

  // length
  risultato = name.length;                    // 25
  // toUpperCase()
  risultato = name.toUpperCase();       // tutto maiuscolo
  // toLowerCase()
  risultato = name.toLowerCase();             // tutto minuscolo
  // indexOf()
  risultato = name.indexOf('G');              // restituisce la posizione della G
  // charAt()
  risultato = name.charAt('5');               // restituisce la posizione 5
  // substring()
  risultato = name.substring(5, 18);



  console.log(risultato);
}

//==============================================================================
// ARRAY []
let ex07 = () => {


}

//==============================================================================
// OBJS {}
let ex08 = () => {

  let persona = {
    nome: "Gabriel",
    anni: 35,
    maggiorenne: true,
    residenza: {
      citta: "Pavia",
      via: "Pietro Pavesi",
      numero: 3,
      cap: 27100
    },
    hobbies: ["motocross", "minimoto", "pista"]
  };

  console.log(persona['residenza']['cap']);       // 27100
  console.log(persona.residenza.cap);             // 27100
  console.log(persona["hobbies"][2]);             // pista
}

//==============================================================================
// CREARE OGGETTI
let ex09 = () => {

  // 1.
  const persona1 = {};
  persona1.anni = 35;
  persona1.name = "Gabriel";
  persona1.lastname = "Serna"

  // 2.
  const persona2 = { name: "Sara", lastname: "Tacchella"};

  // 3. 
  const persona3 = new Object;      // è come dire persona3 = {};

  console.log(persona1);
  console.log(persona2);

}

//==============================================================================
// OBJ vs ARRAY
let ex10 = () => {

  // OBJ
  const persona = {
    nome: "Gabriel"
  }

  // 1. accedere ad un elemento
  persona.nome;
  persona["nome"];

  // 2. aggiungere un elemento
  persona.cognome = "Serna";

  // 3. cancellare un elemento
  delete persona.nome;



  // ARRAY
  const persone = ["Sara"];

  // 1. accedere ad un elemento
  persone[0];

  //2. aggiungere un elemento
  persone.push("Tacchella");

  // 3. cancellare un elemento
  persone.shift();


  console.log(persona);
  console.log(persone);

}

//==============================================================================
// LOGICAL OPERATOR
let ex11 = () => {

  etaBilly = 15;
  eta = 35;
  id = 100;

  // && - entrambe devono essere vere
  if ( etaBilly < 11 ) {
    console.log("Billy è un bambino");
  } else if ( etaBilly > 11 && etaBilly < 19 ) {
    console.log("Billy è un ragazzo"); 
  } else {
    console.log("Billy è un adulto");
  }

  // OR || - solo una deve essere vera
  if (eta < 3 || eta > 99) {
    console.log("non puoi giocare!!!");
  } else {
    console.log("puoi giocare!!!");
  }

  // NOT ! 
  if ( !id === 100 ) {
    console.log("id è uguale a 100.");
  } else {
    console.log("ATTENZIONE: id non è uguale a 100");
  }

  // TERNARY OPERATOR ?
  id === 100 ? console.log("id è uguale a 100") : console.log("id NON è uguale a 100");

}

//==============================================================================
// SWITCH
let ex12 = () => {

  const name = "Gabriel";

  switch (name) {
    case "Riccardo": // scrivere "Riccardo" equivale a scrivere: case name === "Riccardo"
      console.log("il nome è Riccardo");
      break;
    case "Mattia":
      console.log("il nome è Mattia");
      break;
    case "Gabriele":
      console.log("il nome è Gabriele");
      break;
    default:
      console.log("il nome non è presente tra questi");
      break;
  }

}

//==============================================================================
// FUNCTION
let ex13 = () => {

  // function declaration

  function saluta(nome, cognome = 'Serna') { // se cognome non riceve il parametro prende di default Serna
    console.log(`Buongiorno ${nome} ${cognome}`);
  };

  saluta('Gabriel') // qui non passo l'elemento per cognome


  // function expression ( assegnare ad una costante/variabile una funzione )

  const doppio = function (x) {
    console.log(x * 2);
  }

  doppio(10);

}

//==============================================================================
// IIFE ( INMEDIATELY INVOKED FUNCTION EXPRESSION )
let ex14 = () => {

  // bisogna racchiudere la funzione deltro () e richiamarla sempre con ()
  (function saluta() {
    console.log(`Hello world`);
  })();

  (function saluta(nome) {
    console.log(`ciao ${nome}`);
  })('Gabriel');

}

//==============================================================================
// PROPERTY METHODS ( le funzioni dentro gli oggetti si chiamano metodi)
let ex15 = () => {

  const persona = {
    saluta: function (nome, cognome) {
      console.log(`Ciao io sono ${nome} ${cognome}`);
     }
  };

  persona.saluta(`Gabriel`, `Serna`);

  persona.ringrazia = function() {
    console.log('grazie');
  }

  persona.ringrazia();

}
ex15();
//==============================================================================
// LOOP 2.44.45
let ex16() {


}