let courses = {
  _id: "ddd00000000000000ba00001",
  active: true,
  moduleNumber: [7, 2, 8, 4, 1],
  modules: [
    {
      module_id: "ddd00000000000000ca00002",
      order: 2,
    },
    {
      module_id: "ddd00000000000000ca00005",
      order: 5,
    },
    {
      order: 7,
      module_id: "ddd00000000000000ca00007",
    },
    {
      module_id: "ddd00000000000000ca00003",
      order: 3,
    },
    {
      module_id: "ddd00000000000000ca00010",
      order: 10,
    }
  ]
}

let newModule = [
  {
    module_id: "ddd00000000000000ca00001",
    order: 1
  }
]

// let mod = courses.moduleNumber;
// let order = mod.sort();
// let newModNum = mod.filter(el => el !== 1)
// console.log(newModNum);

function compare(a, b) {
  const moduleA = a.order;
  const moduleB = b.order;

  let comparison = 0;

  if (moduleA > moduleB) {
    comparison = 1;
  } else if (moduleA < moduleB) {
    comparison = -1;
  }
  return comparison;
}


export const reorderAll = (unordered, newEl, prop, renum) => {






}

let newOrder1 = courses.modules.sort(compare);
console.log(newOrder1);

// const totalModules = ( modules, module, order) => {
  
//   let addModule = [...modules, module];
  
//   let newOrder = addModule.sort(order);

//   console.log(newOrder);
  
// }
  
// totalModules(course.modules, newModule, compare());