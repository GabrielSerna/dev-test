//==============================================================================
// DATI PRIMITIVI
let ex01 = () => {

  // string
  const nome = 'Gabriel';
  console.log(typeof nome);

  // Number
  let anni = 35;
  console.log(typeof anni);

  // Boolean
  let eMaggiorenne = true
  console.log(typeof eMaggiorenne);

  // Null
  const valore = null
  console.log(typeof valore);
  console.warn('è un bug. JS restituisce un Obj se gli si chiede il typeof di Null');

  // Undefined
  let sesso;
  console.log(typeof sesso);

  // Symbol


}

//==============================================================================
// DATI DI REFERIMENTO (REFERENCE TYPE)
let ex02 = () => {

  // Array
  const nomi = ["Gabriel", "Sara", "Lola"];
  console.log(typeof nomi);

  // Object
  const persona = {
    name: "Gabriel",
    age:  35,
    sex:  "Male"
  }
  console.log(typeof persona);
  persona.name = "Juan";
  console.log(persona);


  // Function


}
//==============================================================================
// TYPE CONVERTION
let ex03 = () => {

  // 1. Number to String
  let age;
  age = 35
  value = String(age);
  console.log(value);
  console.log(typeof value);

  // toString()
  year = 2020
  thisYear = year.toString();
  console.log(thisYear);
  console.log(typeof thisYear);

  // 2. String to Number
  valueN = '30';
  newValue = Number(valueN);
  console.log(newValue);
  console.log(typeof newValue);
  
  // 3. Boolean to Number
  let val = true
  newVal = Number(val);
  console.log(newVal);

  // parseInt and parseFloat
  numbers = parseInt('103.56');     //103
  numbers = parseFloat('103.56');   //103.56
  console.log(numbers);
  console.log(typeof numbers);

}

//==============================================================================
// TYPE COERCION (52:36)
let ex04 = () => {


}