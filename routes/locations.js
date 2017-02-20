var express = require('express');
var Location = require('../models/location');

var Router = new express.Router();

Router.route('/')
  .get(function(req, res){
    Location.find(function(err, locations){
      if (err) {
        res.json(err, 'ERROR');
      } else {
        res.json(locations);
      }
    });
  })
  .post(function(req, res){
    var location = new Location({
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
    });
    location.save(function(err, location){
      if (err) {
        res.json({ message: 'there was an error saving your location' });
      } else {
        res.json(location);
      }
    });
  });



module.exports = Router;
