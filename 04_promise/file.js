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
function ex04() {
  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }

  asyncCall();

}

//==============================================================================
function ex05() {

  function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow")
        console.log("slow promise is done")
      }, 2000)
    })
  }

  function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast")
        console.log("fast promise is done")
      }, 1000)
    })
  }

  async function sequentialStart() {
    console.log('==SEQUENTIAL START==')

    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds()
    console.log(slow) // 2. this runs 2 seconds after 1.

    const fast = await resolveAfter1Second()
    console.log(fast) // 3. this runs 3 seconds after 1.
  }

  async function concurrentStart() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds() // starts timer immediately
    const fast = resolveAfter1Second() // starts timer immediately

    // 1. Execution gets here almost instantly
    console.log(await slow) // 2. this runs 2 seconds after 1.
    console.log(await fast) // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
  }

  function concurrentPromise() {
    console.log('==CONCURRENT START with Promise.all==')
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
      console.log(messages[0]) // slow
      console.log(messages[1]) // fast
    })
  }

  async function parallel() {
    console.log('==PARALLEL with await Promise.all==')
    
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async()=>console.log(await resolveAfter2Seconds()))(),
        (async()=>console.log(await resolveAfter1Second()))()
    ])
  }

  sequentialStart() // after 2 seconds, logs "slow", then after 1 more second, "fast"

  // wait above to finish
  setTimeout(concurrentStart, 4000) // after 2 seconds, logs "slow" and then "fast"

  // wait again
  setTimeout(concurrentPromise, 7000) // same as concurrentStart

  // wait again
  setTimeout(parallel, 10000)

}
// ex05();
//==============================================================================
function ex06() {


}
//==============================================================================
