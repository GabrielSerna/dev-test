//==============================================================================
// ex. for
function ex01() {
  console.log(`
  ========================================================
  ex: 1 for`
  );

  let a1 = [1, 2, 3, 4, 5];
  console.log(`a1: ${a1}`);

  
  for ( i = 0; i < a1.length; i++ ) {
      console.log(a1[i]*10);
  }
}
ex01();
//==============================================================================
// forEach
function ex2() {
  console.log(`
  ========================================================
  ex: 2 forEach`
  );

  let a2 = [1, 2, 3, 4, 5];
  console.log(`a2: ${a2}`);

  a2.forEach(element => console.log(element*10));
}

//==============================================================================
// while ... do
function ex3() {
  console.log(`
  ========================================================
  ex 3: while do`
  );

  let a3 = [1, 2, 3, 4, 5];
  console.log(`a3: ${a3}`);
  let counter3 = 0;

  while (counter3 < a3.length) {
      console.log(a3[counter3]*10);
      counter3++;
  }
}

//==============================================================================
//do ... while
function ex4() {
  console.log(`
  ========================================================
  ex 4: do while`
  );

  let a4 = [1, 2, 3, 4, 5];
  console.log(`a4: ${a4}`);
  let counter4 = 0;

  do {
    console.log(a4[counter4]*10);
    counter4++;
  } while (counter4 < a4.length);
}

//==============================================================================
//for in
function ex5() {
  console.log(`
  ========================================================
  ex 5: for ... in`
  );

  let a5 = [1, 2, 3, 4, 5];
  console.log(`a5 = ${a5}`);
  let counter5 = 0;

  for (i in a5) {
    console.log(a5[i]*10);
    i++;
  } 
}

//==============================================================================
//for of
function ex6() {
  console.log(`
  ========================================================
  ex 6: for ... of`
  );

  let a6 = [1, 2, 3, 4, 5];
  console.log(`a6 = ${a6}`);
  let counter6 = 0;

  for (i of a6) {
  console.log(a6[counter6]*10);
  counter6++;
  }
}
