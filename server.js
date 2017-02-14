var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/zootopia");

var animalRoutes = require('./routes/animals');

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.send({message: "It's alive!!!"});
});

app.use('/api/animals', animalRoutes);


app.listen(app.get('port'), function(){
  console.log(`🔥🔥🔥🔥🔥🔥 at: http://localhost:${app.get('port')}/`);
});
