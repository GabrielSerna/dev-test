// import ObjectsToCsv from 'objects-to-csv';
const objectsToCsv = require('objects-to-csv');

import express from 'express';

const app = express();

app.listen(5000);

const data = [
  { module_id: "ddd00000000000000ca00002", order: 12 },
  { module_id: "ddd00000000000000ca00005", order: 15 },
  { module_id: "ddd00000000000000ca00007", order: 17 },
  { module_id: "ddd00000000000000ca00003", order: 13 },
  { module_id: "ddd00000000000000ca00010", order: 20 }
];

app.get('/', async (req, res) => {
 
    const newCsv = new objectsToCsv(data);
    
    await newCsv.toDisk('./data.csv');
    
    console.log( await newCsv.toString());
  }  
);