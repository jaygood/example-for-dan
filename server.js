var express = require('express');
var app = express();

// file get
app.get('/page/nofriends', function(req, res) {
  console.log('This is the dirname', __dirname);
  res.sendFile('no-friends.html', {root: __dirname});
});

app.get('/page/somefriends', function(req, res) {
  res.sendFile('some-friends.html', {root: __dirname});
});

// api get
app.get('/api/getfriends', function(req, res) {
  var contactsArray = ['Jon', 'Dan', 'Chloe'];
  var jsonString = JSON.stringify(contactsArray);
  res.json(jsonString);
});

var server = app.listen(3000, function () {
  console.log('Listening to 3000');
});
