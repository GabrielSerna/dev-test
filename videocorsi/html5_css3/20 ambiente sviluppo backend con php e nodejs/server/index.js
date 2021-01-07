var express = require('express')

var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})
app.get('/', function (req, res, next) {

   res.json(req.query)
  })
  
  app.listen(8000, () =>{
console.log(' listening on port 8000')
  });
