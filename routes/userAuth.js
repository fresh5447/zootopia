var User = require('../models/user');

// app/routes.js
module.exports = function(app, passport) {


    app.post('/login', function(req, res, next) {
      passport.authenticate('local-login', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.json(info); }
        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json(user);
        });
      })(req, res, next);
    });



    // =====================================
    // SIGNUP ==============================
    // =====================================



    app.post('/signup', function(req, res, next) {
      passport.authenticate('local-signup', function(err, user, info) {
        if (err) {
          console.log(err, "IN FIRST ERR");
          return next(err);
        } else {
          if(!user){
            console.log("Email already taken error");
            res.json({message: "That email is already taken"})
          } else {
            user.save(function(e) {
              if(e){
                console.log("inside the throw error");
                throw e;
              }
              console.log(user, "inside save user success");
              res.json(user);
            })
          }
        }

      })(req, res, next);
    });

    app.get('/allUsers', function(req, res) {
      User.find(function(err, users) {
        if(err){
          throw err;
        } else {
          res.json(users)
        }
      })
    });

    app.get('/getCurrentUser',function(req, res){
      console.log(req.user, "FUCKKKKKK")
      if(req.user){
        User.findById(req.user._id, function(err, user) {
          if(err){
            console.log(err)
          } else {
            res.json(user)
          }
        })
      } else {
        res.json({user: null})
      }
    });





    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
