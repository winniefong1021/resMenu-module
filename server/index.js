var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/mongo.js');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(limitTransfer);
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/:name', function(req, res) {
    var q = req.params.name;
    db.res(q, (err, data) => {
        if (err) {
            res.sendStatus(505);
        } else {
            res.send(JSON.stringify(data));
        }
    })

})


// app.get('/api/users', function(req, res) {
//     var data = JSON.parse(Object.keys(req.query)[0]);
//     console.log(data.name);
//     db.getAllUsers(data.name, (err, data) => {
//         if (err) {
//             res.sendStatus(500);
//         } else {
//             res.send(JSON.stringify(data));
//         }
//     })
// });


app.listen(3000, function() {
    console.log('listening on port 3000!');
});