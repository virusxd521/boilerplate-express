var express = require('express');
var app = express();



// The home route
app.all('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

// The public route, with a middleware
app.use('/public', express.static(`${__dirname}/public`));














 module.exports = app;
