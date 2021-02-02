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
      module_id: "ddd00000000000000ca00007",
      order: 7,
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

let modules = courses.modules;

// METODO 1
// function compare(a, b) {
//   const moduleA = a.order;
//   const moduleB = b.order;
//   let comparison = 0;
//   if (moduleA > moduleB) {
//     comparison = 1;
//   } else if (moduleA < moduleB) {
//     comparison = -1;
//   }
//   return comparison;
// }

// METODO 2
function compare(a, b) {
  a.order - b.order;
  }
// console.log(modules.sort(compare));


const reOrderAll = (unordered, newEl, prop, renum) => {

let allEl = [...unordered, newEl];

reorder = (a, b) => {
  a.order - b.order;
} 

console.log(allEl.sort(reorder));

}

reOrderAll(modules, newModule);