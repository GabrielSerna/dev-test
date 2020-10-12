const fs = require('fs');
fs.readFile('./05_csvInJson/data01.csv', (err, data) => {
  if (err) {
    console.error(err);
  return
  }
  console.log(`i dati sono passati`);
});