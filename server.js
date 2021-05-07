'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
//var cors = require('cors');

app.use(express.static('.'));
app.use(bodyParser.json());
//app.use(cors());

app.get('/catalogData', (req, res) => {
    try {
        fs.readFile('./database/catalog.json', 'utf8', (err, data) => {
            res.send(data);
        });
    } catch {
        alert('Ошибка!');
    }
});

app.post('/addToCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            const cart = JSON.parse(data);
            const item = req.body;

            cart.push(item);

            fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}');
                } else {
                    res.send('{"result": 1}');
                }
            });
        }
    });
});

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     next();
// });

app.listen(3000, () => {
    console.log('server is running on port 3000!');
});