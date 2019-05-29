var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/mongo.js');
var path = require('path');
var app = express();
var React = require('react');
// var Application = require('../client/src/components/App.jsx');
var reactServer = require('react-dom/server');

// var HTMLtemplate = require(path.join(__dirname, '../client/src/template.js'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client/dist'))); // this line becomes useless as we serve the template 



app.get('/restaurant/:name', function(req, res) {
    res.header("X-Content-Type", "text/javascript");
    res.sendFile(path.join(__dirname, '/../client/dist/index.html'))
    console.log('Ok');
});

app.get('/API/restaurant/:name', function(req, res) {
    var q = req.params.name;
    console.log('query ID', q)
    db.res(q, (err, data) => {
        res.header("Access-Control-Allow-Origin", "*");
        if (err) {
            res.sendStatus(505);
        } else {
            data = data[0];
            res.send(JSON.stringify(data));
        }
    })

});


app.listen(3003, function() {
    console.log('listening on port 3003!');
});

