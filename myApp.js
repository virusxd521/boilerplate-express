var express = require('express');
var app = express();
require('dotenv').config();


// Building a simple logger with a middleware
// (Learning middleware)
app.use('/', (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${req.ip}`);
    next();
});

// The home route sending a static HTML file
app.all('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

// The public route, with a middleware
app.use('/public', express.static(`${__dirname}/public`));

// Response with a JSON object
app.get('/json', (req, res) => {
    const obj_lower =  {
        message: "Hello json"
    };

    const obj_upper =  {
        message: "HELLO JSON"
    };

    // if the env variable contains the string upper
    // the json object that will be returned will be in all caps
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json(obj_upper);
    } else {
        res.json(obj_lower);
    }
});





 module.exports = app;
