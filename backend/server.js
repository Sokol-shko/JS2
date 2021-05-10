'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(express.static('../frontend/.'));
app.use(bodyParser.json());

app.get('/catalogData', (req, res) => {
    try {
        fs.readFile('./database/catalog.json', 'utf8', (err, data) => {
            res.send(data);
        });
    } catch {
        alert('Ошибка!');
    }
});

app.get('/cartData', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        res.send(data);
    })
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

app.post('/deleteFromCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}');
        } else {
            let cart = JSON.parse(data);
            const item = req.body;

            cart = cart.filter((good) => good.product_name !== item.product_name);

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

app.listen(3000, () => {
    console.log('server is running on port 3000!');
});