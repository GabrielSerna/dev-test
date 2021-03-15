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
// ex. ARRAY tests
function ex02() {
  console.log(`
  ========================================================
  ex:
  `)

  const arrMix = [7, 2, 8, 4, 1, ()  => 'questa è una funzione', 'sono una stringa', 'anche io', 666, 999 ];
  const modules = [
    { _id: "ddd00000000000000ca00002", order: 12 },
    { _id: "ddd00000000000000ca00005", order: 15 },
    { _id: "ddd00000000000000ca00007", order: 17 },
    { _id: "ddd00000000000000ca00003", order: 13 },
    { _id: "ddd00000000000000ca00010", order: 20 }
  ];

  console.log(modules.map( prop => prop._id ));

}
ex02();
//==============================================================================
// ex. 03
function ex03() {
  console.log(`
  ========================================================
  ex:
  `)


}
// ex03();
//==============================================================================
// ex. 04
function ex04() {
  console.log(`
  ========================================================
  ex:
  `)


}
// ex04();
//==============================================================================
// ex. 05
function ex05() {
  console.log(`
  ========================================================
  ex:
  `)


}
// ex05();