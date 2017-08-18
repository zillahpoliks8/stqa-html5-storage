//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/main.html'));
});

app.get('/users', function(req, res){
  res.sendFile(path.join(__dirname, 'views/users.html'));
});

app.get('/regis', function(req, res){
  res.sendFile(path.join(__dirname, 'views/regis.html'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
 });