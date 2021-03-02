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
// ex. 07
function ex07() {
  console.log(`
  ========================================================
  ex: 07
  `);


}
// ex07();
//==============================================================================
// ex. 08
function ex08() {
  console.log(`
  ========================================================
  ex: 08
  `);


}
// ex08();