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
ex01();