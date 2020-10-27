// @descr 	extract error name and position from stack
// @return	obj {name: errorName, pos: filePosition}
// @author 	crivella - 26/10/2020
function extractError(errorString) {
  const line = errorString.split('\n')[1].trim();
  const name = line.substring(line.search(/at \w/)+3, line.indexOf('(')-1);
  const pos  = line.substring(line.lastIndexOf('/')+1, line.lastIndexOf(')'));
  return {name, pos};
};

let tests = [
  `Error: AUTH : obtainToken - Can't create payload, missing id\n    at obtainToken (file:///d:/dev-wedoit/myhce_mern/backend/auth/auth.js:19:25)\n    at file:///d:/dev-wedoit/myhce_mern/backend/auth/auth.js:45:1\n    at ModuleJob.run (internal/modules/esm/module_job.js:140:23)\n    at async Loader.import (internal/modules/esm/loader.js:165:24)\n    at async Object.loadESM (internal/process/esm_loader.js:68:5)`,
  `TypeError: Cannot read property 'user' of undefined\n    at obtainToken (file:///d:/dev-wedoit/myhce_mern/backend/auth/auth.js:19:68)\n    at file:///d:/dev-wedoit/myhce_mern/backend/auth/auth.js:45:1\n    at ModuleJob.run (internal/modules/esm/module_job.js:140:23)\n    at async Loader.import (internal/modules/esm/loader.js:165:24)\n    at async Object.loadESM (internal/process/esm_loader.js:68:5)`,
  `Error: AUasfasdsad asdasd asd sad as dasd s dasTH : obtainTdsadfasdasdas as da daS doken - Can't create payload, missing id\n    at obtainToken (file:///d:/dev-wedoit/myhce_mern/backend/auth/aasddddauth.js:109:250)\n    at file:///d:/dev-wedoit/myhce_mern/backend/auth/auth.js:45:1\n    at ModuleJob.run (internal/modules/esm/module_job.js:140:23)\n    at async Loader.import (internal/modules/esm/loader.js:165:24)\n    at async Object.loadESM (internal/process/esm_loader.js:68:5))`
];

tests.forEach(el => console.log(extractError(el)));