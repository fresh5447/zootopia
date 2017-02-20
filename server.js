var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/zootopia");
var animalRoutes = require('./routes/animals');

app.set('port', (process.env.PORT || 3001));

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(cookieParser()); // read cookies (needed for auth)

app.use(session({
 secret: 'blahblahblah'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
// routes ======================================================================
require('./config/passport')(passport); // pass passport for configuration
require('./routes/userAuth.js')(app, passport); // load our routes and pass in our app and fully configured passpo

app.use('/api/animals', animalRoutes);






app.listen(app.get('port'), function(){
  console.log(`🔥🔥🔥🔥🔥🔥 at: http://localhost:${app.get('port')}/`);
});
