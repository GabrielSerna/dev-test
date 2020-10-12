let names = ['Gabriel', 'Mattia', 'Claudio', 'Sara', 'Luca'];
let num = [12, 543, 2, 786, 343, 37, 98, 17, 100, 999];

let trova = num.find(el => el > 500);
let mappa = num.map(el => el > 300);
let filtriamo = num.filter(el => el < 100);
let insieme = num.join(' + ');
let unisci = insieme.split(' + ');


let votoRicevuto = 5
let valutazione01;

switch (votoRicevuto) {
  case 1 : valutazione01 = '1 mmmmm'; break;
  case 2 : valutazione01 = '2 mmmmm'; break;
  case 3 : valutazione01 = '3 mmmmm'; break;
  default : valutazione01 = 'ottimo'; break;
}


function obj01() {
  let accessori = {
    scarico : {
      marchio : 'Akrapovioch',
      tipo : '4 in 1',
      costo : 1000
    },

    freni : {
      marchio : 'Brembo',
      tipo : 'pompa freno anteriore',
      costo : 2000
    },

    frizione : {
      marchio : 'STM',
      tipo : 'antisaltellamento',
      costo : 700
    }
  };

  console.table(accessori.freni);
}


let str = 'stringa da modificare'
let arr = str.split(' ');                                                     // separa la stringa al carattere indicato creando un array comnposto dagli elementi separati

for ( let i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
}

str = arr.join(' /// ');                                                          // crea una stringa unendo gli elementi di un array separandoli dal carattere indicato


let str01 = 'finora hai fatto il x del lavoro';
let str02 = '100%';
let str03 = str01.indexOf('x');    // 20
let str04 = ` ${str01.slice(0, str03)} ${str02} ${str01.slice(str03 + 1)}`;


let str05 = `questa é la frase da stroncare ad un certo punto`;
let str05Lenght = str05.length; // 48
let str06 = str05.length > 20 ? str05.substring(0, 20).concat('...') : str05;


let str07 = (ciao) => 'ciao';
let str08 = (arrivederci) => 'arrivederci';
let str09 = (salutaFn) => `${salutaFn}`;
// console.log(str09( () => 'salutaaaaaaaaaaaaaa'));


function str10() {
  for (let elenco of arguments) {
    return elenco;
  };
}

str10(1, "Gabriel", undefined, 777, 'Luca');

let str11 = [...names, ...num];

let str12 = function str13() {
  return `autochiamata`;
  }();

let str13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
let str14 = str13.filter(el => el % 2 === 1);


function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
};

let User1 = new User;
let User2 = new User('Mattia', 36, 'Roma');

User1.name = 'Gabriel';
User1.age = 35;
User1.city = 'Pavia';

let str15 = 3 ** 3


let str17 = (stringa) => stringa.split(',').reverse().join(',');
let str16 = str17(`01, 02, 03, 04, 05, 06, 07, 08 , 09, 10`);

let str18 = {
  16 : 'prima proprietá',
  'seconda' : 'seconda proprietá',
  terza : 'terza proprietá'
};


let str19 = function (nome, altezza) {
  this.nome = nome;
  this.altezza = altezza;
  this.pesoIdeale = function () {
    return `il tuo peso ideale é ${idealWeight()}`;
  };
  let idealWeight = () => altezza - 100 * 0.95;
}

let str20 = new str19('Gabriel', 175);
// console.log(str20.pesoIdeale());


let ex20Macro1 = {
  carbo : 150,
  protein : 130,
  fat : 50
}

let ex20Macro2 = Object.create(ex20Macro1);
ex20Macro2.carbo = 250;
ex20Macro2.protein = 130;
ex20Macro2.fat = 35;
ex20Macro2.dayType = 'workout';


let ex21MediaInferiore = {
  1 : 11,
  2 : 12,
  3 : 13
};

let ex21MediaSuperiore = {
  4 : 14,
  5 : 15,
  6 : 16,
  7 : 17,
  8 : 18
};

Object.setPrototypeOf(ex21MediaSuperiore, ex21MediaInferiore);


function ex22(a) {
  return `${a.slice(0, -4).replace(/./g, '#')}${a.slice(-4)}`;
};

let ex22String = '651465110365';
// console.log(ex22(ex22String));


let ex2401 = [ 1, 3, 44, 76, 88, 55, 8, 21];
let ex2402 = [ 2, 7, 73, 232, 76, 21, 73, 44];
let ex2403 = ex2401.filter(x => !ex2402.includes(x));
let ex2404 = ex2401.filter(x => ex2402.includes(x));
let ex2405 = ex2401.filter(x => !ex2402.includes(x)).concat(ex2402.filter(x => !ex2401.includes(x)));


let ex25 = 65;

function ex25n(x) {
  if ( x % 2 === 0 ) {
    console.log(`this is a Even number`);
  } else {
    console.log(`this is a Odd number`);
  }
};


let ex26 = [ 2, 7, 73, 232, 76, 21, 73, 44];

function ex26F(n) {
  for ( i = 0; i < n.length; i++) {
    if ( i % 2 === 0) {
      console.log(`${ex26[i]} é un numero pari`);
    } else {
      console.log(`${ex26[i]} é un numero dispari`);
    };
  };
}


let ex27 = `stringa da separare`;
// console.log(ex27.replace(ex27, `nuova stringa`));

// ex33
function Team (pilota01, pilota02, moto) {
  this.pilota01 = pilota01;
  this.pilota02 = pilota02;
  this.moto = moto
};

let yamahaOfficial = new Team('Rossi', 'Vinales', 'yamaha Movistar');
let yamahaSatelite = new Team('Quartararo', 'Morbidelli', 'Yamaha Petronas');


function client (azienda, sede, referente) {
  this.azienda = azienda;
  this.sede = sede;
  this.referente = referente
};

let hci = new client ('Atelier HCI', 'Busto Garolfo', 'Francesca Todisco');
let boi = new client ('Bollhoff', 'Corsico', 'Antonella Abbagnato');


// ex35 factory function
function user(nome, cognome) {
  obj = {
    persona : nome,
    lastname : cognome,
    person : function () {
    return `${this.persona} ${this.lastname}`;
    }
  };

  return obj
}

let ex35obj = user('Gabriel', 'Serna');

// console.log(ex35obj.person()); 