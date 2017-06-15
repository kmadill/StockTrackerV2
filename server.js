var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/css/app.css', function(req, res) {
  res.sendFile(path.join(__dirname+'/css/app.css'));
});

app.get('/js/papaparse.min.js', function(req, res) {
  res.sendFile(path.join(__dirname+'/js/papaparse.min.js'));
});

app.get('/js/app.js', function(req, res) {
  res.sendFile(path.join(__dirname+'/js/app.js'));
});

app.get('/js/moment.min.js', function(req, res) {
  res.sendFile(path.join(__dirname+'/js/moment.min.js'));
});

app.get('/js/Chart.min.js', function(req, res) {
  res.sendFile(path.join(__dirname+'/js/Chart.min.js'));
});


var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
