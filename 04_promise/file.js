//==============================================================================
function ex01() {
  let promessa1 = new Promise ((res, rej) => {
    setTimeout( () => {
      let marmellataPortata = true;
      if (marmellataPortata = true) {
        res(console.log("facciamo la crostata"));
      } else {
        rej(console.log("facciamo la crostata appena abbiamo la marmellata"));
      };
    }, 5000);
  });

  console.log('mangiamo qualcosa');
};

//==============================================================================
function ex02() {
  let promessa1 = new Promise ( (res, rej) => {
      let marmellataPortata = false;
      if (marmellataPortata === true) {
        res("facciamo la crostata");
      } else {
        rej("facciamo la crostata appena abbiamo la marmellata");
      };
    });

  promessa1.then( (risp) => {
    console.log(risp);
  }).catch((err) => {
    console.log(err);
  });
  console.log('mangiamo qualcosa');
};

//==============================================================================
function ex03() {
  function azione(tipo) {
    return new Promise((res, rej) => {
      let marmellataPortata = true;
      if (marmellataPortata === true) {
        res(`azione ${tipo}: risolta`);
      } else {
        rej(`azione ${tipo}: rifiutata`);
      };
    });
  };
  const obiettivo = azione(`prendere la marmellata`);
  obiettivo.then((risp) => {
    console.log(risp);
    return azione(`fare la crostata`);
  })
  .then((risp) => {
    console.log(risp);
    return azione(`portare la marmellata a cena`);
  })
  .then((risp) => {
    console.log(risp);
  }).catch((err) => {
    console.log(err);
  });
};

//==============================================================================
