
const express = require('express')
const app = express()
const port = 4000
const data = require('./data.json');
const cors = require('cors');

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/chargingStations", (req,res) =>{
  res.set('Access-Control-Allow-Origin','*');
  res.json(data.chargingStations);
});
app.use(cors());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
