//==============================================================================
// ex. 01
function metodiArray () {
  let numbers = [2, 3, 4, 7, 5, 6];

  console.log(`
  ========================================================
  ex: 01 metodi degli array`
  );
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
  console.log(Ferrari.motore.cavalli);                                          // 
}

//==============================================================================
// ex. 05 stringa da modificare

function ex05() {
  console.log(`
  ========================================================
  ex: 05 stringa da modificare`
  );

  let str = 'stringa da modificare'
  let arr = str.split(' ');

  for ( let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
  }

  str = arr.join(' ');
  console.log(str);
}

//==============================================================================
// ex. 06