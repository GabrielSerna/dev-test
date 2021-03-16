//==============================================================================
// ex. REORDER OBJ
function ex01() {
  console.log(`
  ========================================================
  ex: REORDER
  `)

  const courses = {
    arrMix: [7, 2, 8, 4, 1, ()  => 'questa è una funzione', 'sono una stringa', 'anche io', 666, 999 ],
    modules: [
      { module_id: "ddd00000000000000ca00002", order: 12 },
      { module_id: "ddd00000000000000ca00005", order: 15 },
      { module_id: "ddd00000000000000ca00007", order: 17 },
      { module_id: "ddd00000000000000ca00003", order: 13 },
      { module_id: "ddd00000000000000ca00010", order: 20 }
    ]
  }

  const newModule = { module_id: "ddd00000000000000ca00001", order: 1 }

  let newCourses = [];

  for ( let key of courses.modules) {
    console.log(`${key} => ${courses.modules[key]}`);
  }

  console.log('eccolo')

}
// ex01();
//==============================================================================
// ex. 02 - Object embedded into an Array and return a specific property of Obj
function ex02() {
  console.log(`
  ========================================================
  ex: 02 - Object embedded into an Array and return a specific property of Obj
  `)

  const arrMix = [7, 2, 8, 4, 1, ()  => 'questa è una funzione', 'sono una stringa', 'anche io', 666, 999 ];
  const modules = [
    { _id: "ddd00000000000000ca00002", order: 12 },
    { _id: "ddd00000000000000ca00005", order: 15 },
    { _id: "ddd00000000000000ca00007", order: 17 },
    { _id: "ddd00000000000000ca00003", order: 13 },
    { _id: "ddd00000000000000ca00010", order: 20 }
  ];

  console.log(modules.map( prop => prop._id )); // ['ddd00000000000000ca00002', 'ddd00000000000000ca00005', 'ddd00000000000000ca00007', 'ddd00000000000000ca00003', 'ddd00000000000000ca00010']

}
// ex02();
//==============================================================================
// ex. 03 - verify an argument
function ex03() {
  console.log(`
  ========================================================
  ex: 03 - verify an argument
  `)

  const myObj = { name: "Gabriel", age: 35 };

  function checkObj( object ) {
    
    console.log(typeof object === "object" && !Array.isArray(object) && object !== null);
  };

  checkObj(myObj); // true

}
// ex03();
//==============================================================================
// ex. 04 - make pairs key and value
function ex04() {
  console.log(`
  ========================================================
  ex: 04 - make pairs key and value
  `)

  const myObj = { a: 1, b: 2, c: 3};

  function makePairs1( objs ) {
    let myArr = [];
    for ( let key in objs ) {
      myArr.push( [key, objs[key]] );
    }
    return myArr;
  }
  
  function makePairs2( objs ) {
    return Object.entries(myObj);
  };
    
  function makePairs3( objs ) {
    return Object.keys(myObj).map( el => [el, myObj[el]]);
  };

  console.log(`---`)
  console.log(makePairs1(myObj));
  console.log(makePairs2(myObj));
  console.log(makePairs3(myObj));
  console.log(`---`)
}
// ex04();
//==============================================================================
// ex. 05
function ex05() {
  console.log(`
  ========================================================
  ex: 05
  `)





}
// ex05();