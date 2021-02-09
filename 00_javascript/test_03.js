//==============================================================================
// ex. REORDER OBJ
function ex01() {
  console.log(`
  ========================================================
  ex: REORDER
  `)

  let courses = {
    _id: "ddd00000000000000ba00001",
    active: true,
    moduleNumber: [7, 2, 8, 4, 1],
    modules: [
      {
        module_id: "ddd00000000000000ca00002",
        order: 12,
      },
      {
        module_id: "ddd00000000000000ca00005",
        order: 15,
      },
      {
        module_id: "ddd00000000000000ca00007",
        order: 17,
      },
      {
        module_id: "ddd00000000000000ca00003",
        order: 13,
      },
      {
        module_id: "ddd00000000000000ca00010",
        order: 20,
      }
    ]
  }

  let newModule = [
    {
      module_id: "ddd00000000000000ca00001",
      order: 1
    }
  ]

  let modules = courses.modules;

  // METODO 2
  function compare(a, b) {
    a.order - b.order;
    }
  // console.log(modules.sort(compare));

  let newOrder;
  let start = 1;


  const reOrderAll = (unordered, newEl, prop, renum) => {

    let allEl = [...unordered, newEl];
    reorder = (a, b) => a.order - b.order;
    newOrder = allEl.sort(reorder)

    for ( el of newOrder) {
      el.order = start;
      start += 1;
    }

    return newOrder;

  }

  reOrderAll(modules, newModule[0], modules.order);

  console.log(newOrder);

};

//==============================================================================
// ex.
function ex02() {
  console.log(`
  ========================================================
  ex:
  `);


}

//==============================================================================
// ex.
function ex03() {
  console.log(`
  ========================================================
  ex:
  `);


}