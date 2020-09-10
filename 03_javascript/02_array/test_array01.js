//==============================================================================
// ex. 01 array numerico
function ex01() {
  console.log(`
  ========================================================
  ex: 01 array numerico`
  );

  let arrNum01 = [1, 2, 3, 4, 5];
  let arrNum02 = [1, 2, 3, 4, '5', true, () => 80, undefined, ['primo', 'secondo']];

  console.log (arrNum01[0]);                                                    // restituisce 1
  console.log (arrNum02[6]());                                                  // restituisce la funzione
  console.log (arrNum02[8][1]);                                                 // restituisce 'secondo'
}

//==============================================================================
// ex. 02 array associativo
function ex02 () {
  console.log(`
  ========================================================
  ex: 02 array associativo`
  );

  let valori01 = {Jessica: 'F', Mattia: 'M', Claudio: 'MF'};
  console.log(valori01['Claudio']);                                             // restituisce MF
  console.log(valori01.Claudio);                                                // restituisce MF

  let valori02 = {
    Michele: 1,
    Francesca: true,
    prossimo: (num) => num + 20
  }
  console.log(valori02.prossimo(10));                                           // restituisce 30
}

//==============================================================================
// ex. 03