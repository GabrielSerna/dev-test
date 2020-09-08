//==============================================================================
// ex. 01 function
function staff (uno, due, tre) {
  console.log(`
  ========================================================
  ex: 1 function01`
  );

  console.log(`oggi siamo ${uno} ${due} ${tre} `);
} 
  // staff ('Mattia', 'Riccardo', 'Claudio');
//==============================================================================
// ex. 02 arrow function
const intelligenze = (a, b, c, d, e) => `le 5 intelligenze sono : ${a}, ${b}, ${c}, ${d}, ${e}`;

  console.log(`
  ========================================================
  ex: 02 arrow function`
  );

  console.log(intelligenze('Strategica', 'Comportamentale', 'Ambientale', 'Linguistica', 'Emotiva'));
//==============================================================================
// ex. 03 function
function libri (a, b) {
  console.log(`
  ========================================================
  ex: 03 function`
  );

  console.log(`i libri possono essere letti ${a} e in formato ${b}`);
}

// libri('cartacei', 'ebook');
//==============================================================================
// ex. 04 arrow function
const lettura = (a, b) => `i libri possono essere letti ${a} e in formato ${b}`

  console.log(`
  ========================================================
  ex: 04 arrow function`
  );

console.log(lettura('cartacei', 'ebook'));

//==============================================================================
// ex. 05 function attraverso la variabile

// let square = function(number) {
//   console.log(`
//   ========================================================
//   ex: 05 arrow function`
//   );
//   return number * number
// };

// let x = square(7);
// console.log(`richiamo la funzione attraverso la variabile x quindi ottengo = ${x}`);
//==============================================================================
// ex. 06 function annidata

function addSquares(a,b) {
  console.log(`
  ========================================================
  ex: 06 function annidata`
  );

  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
//  console.log(addSquares(3,4)); // restituisce 25
//==============================================================================
// ex. 07
function A(x) {
  console.log(`
  ========================================================
  ex: 07 function annidata`
  );
  function B(y) {
    function C(z) {
      console.log (x + y + z);
    }
    C(3);
  }
  B(2)
}

//==============================================================================
// ex. 08
