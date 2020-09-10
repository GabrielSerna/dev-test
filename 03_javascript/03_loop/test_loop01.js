//==============================================================================
// ex. 01 for
function ex01() {
  console.log(`
  ========================================================
  ex: 01 for`
  );

  let gg = [1, 2, 3, 4, 5];
  console.log(`giorni di lettura ${gg.length}`);

  for( i = 0; i < gg.length; i++) {
    console.log(`leggendo 10 pagine al giorno oggi sei a pagina ${gg[i]*10}`);
  }
}

//==============================================================================
// ex. 02 forEach
function ex02() {
  console.log(`
  ========================================================
  ex: 02 forEach`
  );

  let giorni = [1, 2, 3, 4, 5];
  console.log(`giorni di lettura ${giorni.length}`);

  giorni.forEach(element => console.log(`hai letto 10 pagine al giorno!!! oggi sei a pagina ${element*10}`));
}

//==============================================================================
// ex. 03 for
function ex03() {
  console.log(`
  ========================================================
  ex: 03 for`
);

let tb3 = [1];
console.log(`tabellina del 3`);

for ( i = 0; i < 11; i++) {
  console.log(`3 x ${i} = ${3*i}`);
  }
}

//==============================================================================
// ex. 04 forEach
function ex04() {
  console.log(`
  ========================================================
  ex: 04 forEach`
  );

  let tabe03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(`tabellina del 3 con forEach`);

  tabe03.forEach(element => console.log(`3 x ${element} = ${3*element}`));
}

//==============================================================================
// ex. 05 for
function ex05() {
  console.log(`
  ========================================================
  ex: 05 for`
  );

  let daily = [1];
  console.log(`leggendo 30 minuti al giorno, ti dico quanto leggi in una settimana e un mese`);

  for (i = 0; i < 31; i++) {
    console.log(`Il giorno ${i} e hai letto per ${i*0.5} ore`);
  }
}

//==============================================================================
// ex. 06 forEach
function ex06() {
  console.log(`
  ========================================================
  ex: 06 forEach`
  );

  let lettura = [7, 14, 21, 28];
  console.log(`leggendo 30 minuti al giorno, vedrai quanto hai letto ogni settimana`);

  lettura.forEach(element => console.log(`leggendo per ${element} giorni hai letto per ${element*0.5} ore`));
}

//==============================================================================
// ex. 07

//==============================================================================
// ex. 08

//==============================================================================
// ex. 09

//==============================================================================
// ex. 10

