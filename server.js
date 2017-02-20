var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/zootopia");

var animalRoutes = require('./routes/animals');
var locationRoutes = require('./routes/locations');

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.set('port', (process.env.PORT || 3001));

app.use('/api/animals', animalRoutes);
app.use('/api/locations', locationRoutes);


app.listen(app.get('port'), function(){
  console.log(`🔥🔥🔥🔥🔥🔥 at: http://localhost:${app.get('port')}/`);
});
