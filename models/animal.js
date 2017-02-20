var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = new Schema({
  name: String,
  species: String,
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
});

module.exports = mongoose.model('Animal', AnimalSchema);
