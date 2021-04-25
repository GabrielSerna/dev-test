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
// ex. 04 - 2. make pairs key and value
function ex04() {
  console.log(`
  ========================================================
  ex: 04 - 2. make pairs key and value
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
    return Object.entries( objs );
  };
    
  function makePairs3( objs ) {
    return Object.keys(objs).map( el => [el, objs[el]]);
  };

  console.log(`---`)
  console.log(makePairs1(myObj));
  console.log(makePairs2(myObj));
  console.log(makePairs3(myObj));
  console.log(`---`)
}
// ex04();
//==============================================================================
// ex. 05 - 3. method that returns a new object without provided properties
function ex05() {
  console.log(`
  ========================================================
  ex: 05 - 3. method that returns a new object without provided properties
  `)

  const myObj = { a: 1, b: 2, c: 3};
  let newObject = {};

  let without = (obj, ...args) => {
    newObject = { ...obj };

    args.forEach( arg => delete newObject[arg] );
  };
  
  without(myObj, 'a', 'c');
  console.log(newObject);
  
}
// ex05();
//==============================================================================
// ex. 06 - 4. method that makes a shallow check is object empty 
function ex06() {
  console.log(`
  ========================================================
  ex: 06 - 4. method that makes a shallow check is object empty 
  `)

  const myObj1 = { a: 1, b: undefined};
  const myObj2 = { a: undefined};
  const myObj3 = [];
  const myObj4 = [false];
  const myObj5 = {};
  const myObj6 = [{}];

  // let isEmpty = ( obj ) => JSON.stringify(obj) === '{}' ;
  let isEmpty = ( object ) => {
    const objectKeys = Object.keys(object)
    if (objectKeys.length === 0) {
      return true;
    };

    return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
  };

  // const isEmpty = (object) => {
  //   const objectKeys = Object.keys(object);
  //   if (objectKeys.length === 0) {
  //     return true;
  //   }
  
  //   return !objectKeys.filter((key) => object[key] || object[key] === 0 || object[key] === false).length;
  // };
    
    console.log(isEmpty(myObj1)); // false
    console.log(isEmpty(myObj2)); // true
    console.log(isEmpty(myObj3)); // false
    console.log(isEmpty(myObj4)); // false
    console.log(isEmpty(myObj5)); // true
    console.log(isEmpty(myObj6)); // false
    
};
// ex06();
//==============================================================================
// ex. 07 - clone an array
function ex07() {
  console.log(`
  ========================================================
  ex: 07 - clone an array

  `)

  let cloneArray = data => {
    return data.slice(0);
  }

  console.log(cloneArray([0, 1, 2, 4, 0]));
  console.log(cloneArray([1, 2, [4, 5]]));

}
// ex07();
//==============================================================================
// ex. 08 - iterare un oggetto, trasformando le sue prop in Array, ciclo e stampo l'Array
function ex08() {
  console.log(`
  ========================================================
  ex: 08 - iterare un oggetto, trasformando le sue prop in Array, ciclo e stampo l'Array
  `)

  let user = {
    name: "Gabriel",
    age: 35,
    city: "Pavia" 
  }

  // let ciclo = Object.entries(user).map( (key, value) => `${key}`);

  for ( const [key, value] of Object.entries(user)) {
    console.log(`${key} - ${value}`);
  };
}
// ex08();
//==============================================================================
// ex. 09 challenge 6.1 JavaScript Bible
function ex09() {
  console.log(`
  ========================================================
  ex: 09 challenge 6.1 JavaScript Bible
  `)

  const photoGallery = (title, dimensions, date) => {
    return {
      title,
      dimensions,
      date,
      [dimensions]: true,
      info() {
        console.log(
          `Dimenstions of the foto "${title}" are ${dimensions}`
        );
      },
      dimensions,
      publishInfo() {
        console.log(
          `Foto ${title} was published ${Math.floor(
            (new Date().getTime() - date.getTime()) / 1000
          )} seconds ago`);
      }
    };
  };

  const testDimension1 = "1920x1080";
  const testDimension2 = "1080x720";

  const photo1 = photoGallery(
    "My dog",
    [testDimension1],
    new Date()
  );

  photo1.info();
  /* Dimenstions of the foto "My dog" are 1920x1080 */

  setTimeout(() => photo1.publishInfo(), 2000);
  /* Foto "My dog" was published 2 seconds ago */

  console.log(photo1[testDimension1]); // true
  console.log(photo1[testDimension2]); // undefined

}
// ex09();
//==============================================================================
// ex. 10
function ex10() {
  console.log(`
  ========================================================
  ex: 10
  `)

  let courses = {
    name: "course1",
    code: "CC001",
    levels: [
      {
        levelname: "level01",
        order: 1,
        modules: [
          {
            modulename: "MC1_01",
            order: 1,
            title: "module title 01",
            test: "test01",
            questions: [
              {
                title: "question number 1 of module 1",
                question: "xxxxxxxxx"
              },
              {
                title: "question number 2 of module 2",
                question: "xxxxxxxxx"
              }
            ]
          },
          {
            modulename: "MC1_02",
            order: 2,
            title: "module title 02",
            test: "test01",
            questions: [
              {
                title: "question number 1 of module 2",
                question: "xxxxxxxxx"
              },
              {
                title: "question number 2 of module 2",
                question: "xxxxxxxxx"
              }
            ]
          }
        ]
      }
    ]
  }

  // delete a specific prop
  let question1 = () => {courses.levels[0].modules[1].questions.map( el => {
    if ( el.title === "question number 1 of module 2" ) delete el.title;
  })};
  // question1();

  // add a specific prop
  let newQuestion = () => courses.levels[0].modules[0].questions[0].newQuestionProp = "this is a new question prop";
  newQuestion();

  // modify a specific prop
  // let updQuestion = () => courses.levels[0].modules[0].questions[0].newQuestionProp = "this prop was upddated";
  courses.levels[0].modules[0].questions[0].newQuestionProp = "this prop was upddated";
  // updQuestion();

  // console.log(courses);

}
// ex10();
//==============================================================================
// ex. 11
function ex11() {
  console.log(`
  ========================================================
  ex: 11
  `)

}
// ex11();
//==============================================================================
// ex. 12
function ex12() {
  console.log(`
  ========================================================
  ex: 12
  `)

}
// ex12();