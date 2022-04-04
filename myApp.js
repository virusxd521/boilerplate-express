var express = require('express');
var app = express();


app.post('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

app.all('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});














 module.exports = app;
