let course = {
    _id: "ddd00000000000000ba00001",
    active: true,
    modules: [
          {
              module_id: "ddd00000000000000ca00001",
              order: 1,
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

let mod = course.modules;

let newMod = mod.map( mod.find( ))

console.log(mod);