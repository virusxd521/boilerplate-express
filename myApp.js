var express = require('express');
var app = express();



// The home route sending a static HTML file
app.all('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

// The public route, with a middleware
app.use('/public', express.static(`${__dirname}/public`));

// Response with a JSON object
app.get('/json', (req, res) => {
    const obj =  {
        message: "Hello json"
    };
    res.json(obj);
});





 module.exports = app;
