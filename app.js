//Server generated
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    return res.sendFile(__dirname, "index.html",)
  })
  
app.get('/reserve', (req, res) => {
  return res.sendFile(__dirname, "reserve.html",)
})

app.get('/tables', (req, res) => {
  return res.sendFile(__dirname, "tables.html",)
})

app.get('/api', (req, res) => {
  return res.sendFile(__dirname, "index.html",)
})

app.get('/api/tables', (req, res) => {
  return res.json();
})

app.get('/api/waitlist', (req, res) => {
  return res.json();
})


const Port = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log(`Server is listening at http://${IP}:${Port}`);
    }
});