var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = new Schema({
  name: String,
  species: String
});

module.exports = mongoose.model('Animal', AnimalSchema);
