//==============================================================================
// ex. 01 video 48 - challenge 1
function ex01() {
  console.log(`
  ========================================================
  ex: 01  video 48 - challenge 1
  `);

  const mult = ( a, b, c ) => {
    const result = a * b * c;
    console.log(result);
  }

  mult(10, 2, 3);         // 60
  mult(10, 2, "abc");     // NaN
  mult();                 // NaN
}
// ex01();
//==============================================================================
// ex. 02 video 49 - challenge
function ex02() {
  console.log(`
  ========================================================
  ex: 02 video 49 - challenge
  `);

  const outerFunction = (num1, num2) => {

     function innerFunction(number) {
       return number * number;
     }

    const sum = num1 + num2;

    const result = innerFunction(sum);

    console.log(result);
  }

  outerFunction(5, 2); // 49
  outerFunction(3, 7); // 100
}
// ex02();
//==============================================================================
// ex. 03 video 53 - use setInterval - setTimeOut - clearInterval
function ex03() {
  console.log(`
  ========================================================
  ex: 03 video 53 - use setInterval - setTimeOut - clearInterval
  `);

  let i = 1;

  const myInterval = setInterval(function() {
    console.log(`Here is message number ${i}`);
    i = i + 1;
  }, 1000);

  setTimeout(function() {
    clearInterval(myInterval);
  }, 6000);

}
// ex03();
//==============================================================================
// ex. 04 video 64 - 
function ex04() {
  console.log(`
  ========================================================
  ex: 04 video 64 - 
  `);

  let var1 = 10;

  let var2 = "20";

  console.log(+var1 <= +var2);

  console.log(typeof var1);
  console.log(typeof var2);
}
// ex04();
//==============================================================================
// ex. 05 video 65 - logical operators and operators
function ex05() {
  console.log(`
  ========================================================
  ex: 05 video 65 - logical operators and operators
  `);

  console.log(3 || true && null || false);                // 3 because "||" has more precedence than "&&"

  let a = 10;

  a = a + 1;
  a += 1;

  a = a * 2;
  a *= 2;

  a = a - 5;
  a -= 5;
}
// ex05();
//==============================================================================
// ex. 06 call a function, return a function and pass an argument
function ex06() {
  console.log(`
  ========================================================
  ex: 06 call a function, return a function and pass an argument
  `);

  function fn() {
    console.log("greeting from the FN function");

    return function(a) {
      console.log(a);
    };
  }

  fn()('Greeting from the second function');
}
// ex06();
//==============================================================================
// ex. 07 video 97 TASK 1 - loop sull'oggetto e stampa le proprietà che gli dico
function ex07() {
  console.log(`
  ========================================================
  ex: 07 video 97 TASK 1 - loop sull'oggetto e stampa le proprietà che gli dico
  `);

  const myObject = {
    key1: true,
    key5: 10,
    key3: "abc",
    key4: null,
    key9: NaN
  };

  for ( let key in myObject) {
    // se presenti key1 || key2 mi stampa i loro values
    if ( key === "key1" || key === "key3") console.log(myObject[key]);
  }
}
// ex07();
//==============================================================================
// ex. 08 video 97 98 99 TASK 2 - check an array, if new number is not present add it
function ex08() {
  console.log(`
  ========================================================
  ex: 08 video 97 98 99 TASK 2 - check an array, if new number is not present add it
  `);

  const min = 1000;
  const max = 9999;
  const myNumbers = [
    2355,
    7235,
    8135,
    1762,
    2361,
    8351
  ];

  let newRandomNumber;

  function getRandomInt(min, max) {
    // return a number between 1000 and 9999
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function isNotUnique(num) {
    // compare num with numbers in the myNumbers array
    for ( let number of myNumbers ) {
      if (number === newRandomNumber) {
        return true;
      }
    }
  }

  do {
    newRandomNumber = getRandomInt(min, max);
  } while (isNotUnique(newRandomNumber));

  myNumbers.push(newRandomNumber);

  console.log(myNumbers);
}
// ex08();
//==============================================================================
// ex. 09
function ex09() {
  console.log(`
  ========================================================
  ex: 09
  `);


}
// ex09();
//==============================================================================
// ex. 10
function ex10() {
  console.log(`
  ========================================================
  ex: 10
  `);


}
// ex10
//==============================================================================
// ex. 11
function ex11() {
  console.log(`
  ========================================================
  ex: 11
  `);


}
// ex11();
//==============================================================================
// ex. 12
function ex12() {
  console.log(`
  ========================================================
  ex: 12
  `);


}
// ex12();
//==============================================================================
// ex. 13
function ex13() {
  console.log(`
  ========================================================
  ex: 13
  `);


}
// ex13();
//==============================================================================
// ex. 14
function ex14() {
  console.log(`
  ========================================================
  ex: 14
  `);


}
// ex14();
//==============================================================================
// ex. 15
function ex52() {
  console.log(`
  ========================================================
  ex: 15
  `);


}
// ex15();