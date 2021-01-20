//Server generated
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    return res.send('<h2>Welcome to Express App<h2>');
})

const Port = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log(`Server is listening at ${IP}:${Port}`);
    }
});