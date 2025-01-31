//create web server
var express = require('express');
var app = express();

//load comments data
var comments = require('./comments.json');

//set up a route to get comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

//start server
app.listen(3000, function() {
    console.log('server is listening on port 3000');
});