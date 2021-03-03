// import ObjectsToCsv from 'objects-to-csv';
const ObjectsToCsv = require('objects-to-csv');

const data = [
  { module_id: "ddd00000000000000ca00002", order: 12 },
  { module_id: "ddd00000000000000ca00005", order: 15 },
  { module_id: "ddd00000000000000ca00007", order: 17 },
  { module_id: "ddd00000000000000ca00003", order: 13 },
  { module_id: "ddd00000000000000ca00010", order: 20 }
];


  const dataToSave = async () => {
    const csv = new ObjectsToCsv(data);
  
    // Save to file:
    await csv.toDisk('./test.csv');
  
    // Return the CSV file as string:
    console.log(await csv.toString());
  };

dataToSave();