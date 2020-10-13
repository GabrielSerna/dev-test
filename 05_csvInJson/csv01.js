// =============================================================================
// test02 fatto con readFile()
function test02() {

  const fs = require('fs');
  const staff = './05_csvInJson/data01.csv';
  let dataDipe = fs.readFileSync(staff, 'utf8', (err, data) => {
    // if (err) {
    //   console.error(err);
    // } 
      return data;
  });
  console.log(dataDipe);
  let lines = dataDipe.split("\n");
  console.log(lines);
  let result = [];
  
    let headers = lines[0].split(",");
    for ( let i = 1; i < lines.length; i++) {
      let obj = {};
      let currentline = lines[i].split(",");
  
      for ( let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    };
  //   return JSON.stringify(result);
  // console.log(JSON.stringify(lines));
  return lines;
}
test02();