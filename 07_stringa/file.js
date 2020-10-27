/*
1) ho una stringa
2) individuo il primo '\n'
3) individuo la prima '('
3) restituisco tutto quello che c'è tra '\n' e la prima '('
4) restituisce 'auth.js:xxx:xxx' che si trova nella stessa riga prima del secondo '\n'
*/


function dati(stringa) {
  let pos1n = stringa.indexOf('\n');
  let pos1p = stringa.indexOf('(');
  let str1 = stringa.slice(pos1n + 5, pos1p);

  let str2 = stringa.slice(pos1p);
  let pos2n = str2.indexOf('auth.js:');
  let pos2p = str2.indexOf(')');
  let str3 = str2.slice(pos2n, pos2p);


  console.log(`la prima parte è: ${str1}. La seconda parte è: ${str3}`);
}


let strA = `Error: AUTH : obtainToken - Can't create payload, missing id\n    at obtainToken (file:///d:/dev-wedoit/myhce_mern/backend/auth/auth.js:19:25)\n    at file:///d:/dev-wedoit/myhce_mern/backend/auth/auth.js:45:1\n    at ModuleJob.run (internal/modules/esm/module_job.js:140:23)\n    at async Loader.import (internal/modules/esm/loader.js:165:24)\n    at async Object.loadESM (internal/process/esm_loader.js:68:5)`;
let strB = `TypeError: Cannot read property 'user' of undefined\n    at obtainToken (file:///d:/dev-wedoit/myhce_mern/backend/auth/auth.js:19:68)\n    at file:///d:/dev-wedoit/myhce_mern/backend/auth/auth.js:45:1\n    at ModuleJob.run (internal/modules/esm/module_job.js:140:23)\n    at async Loader.import (internal/modules/esm/loader.js:165:24)\n    at async Object.loadESM (internal/process/esm_loader.js:68:5)`;
let strC = `Error: AUasfasdsad asdasd asd sad as dasd s dasTH : obtainTdsadfasdasdas as da daS doken - Can't create payload, missing id\n    at obtainToken (file:///d:/dev-wedoit/myhce_mern/backend/auth/aasddddauth.js:109:250)\n    at file:///d:/dev-wedoit/myhce_mern/backend/auth/auth.js:45:1\n    at ModuleJob.run (internal/modules/esm/module_job.js:140:23)\n    at async Loader.import (internal/modules/esm/loader.js:165:24)\n    at async Object.loadESM (internal/process/esm_loader.js:68:5))`;


dati(strC);