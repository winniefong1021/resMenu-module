var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/mongo.js');
var path = require('path');
var app = express();
var React = require('react');
// var App = require('./client/App.js');
var reactServer = require('react-dom/server');

var HTMLtemplate = require(path.join(__dirname, '../client/src/template.js'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public'))); // this line becomes useless as we serve the template 

app.get('/:name', function(req, res) {
    var q = req.params.name;

    // TO INVESTIGATE not sure why there is a request for favicon.ico
    if (q === 'favicon.ico') {
        res.send();
        return;
    }
    db.res(q, (err, data) => {

        res.header("Access-Control-Allow-Origin", "*");
        if (err) {
            res.sendStatus(505);
        } else {
            data = data[0];
            // var body = reactServer.renderToString( < App / > );

            var str = HTMLtemplate({ body: 'hi', title: data.name, address: data.streetAddress })
            res.send(str);
        }
    })
})




app.listen(3000, function() {
    console.log('listening on port 3000!');
});