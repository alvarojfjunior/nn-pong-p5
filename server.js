var express = require('express');
const database = require('mime-db');
var app = express();
var server = app.listen(process.env.PORT || 3000, listen);

// Create server
function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://' + host + ':' + port);
}

// Set directory app
app.use(express.static('public'));
