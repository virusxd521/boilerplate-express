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

// chaining middleware
// I think it some how relates to closures
app.get('/now', (req, res, next) => {
    // setting the current time to the time key into the request object
    req.time = new Date().toString();    
    next();
}, (req, res) => {
    const json_obj = {
        time: req.time
    }
    res.json(json_obj);
});

// echo server mounting 
app.get('/:word/echo', (req, res) => {
    const echo_obj = {
        echo: req.params.word
    }
    res.json(echo_obj);
})

app.get('/name', (req, res) => {
    const res_obj = {
        name: `${req.query.first} ${req.query.last}`
    }
    res.json(res_obj);
})

module.exports = app;
