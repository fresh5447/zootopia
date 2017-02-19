var User = require('../models/user');

// app/routes.js
module.exports = function(app, passport) {

    app.post('/login', function(req, res, next) {
      passport.authenticate('local-login', function(err, user, info) {
        if (err) {
          return next(err);
        } else {
          if(!user){
            res.json(info);
          } else {
            user.save(function(e) {
              if(e) {
                console.log(e, "THROWING E");
                throw e;
              }
              console.log("SUCCESS IN LOGGING IN!")
              res.json(user);
            })
          }
        }

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


    // app.post('/signup',
    //   passport.authenticate('local-signup'),
    //   function(req, res) {
    //     // If this function gets called, authentication was successful.
    //     // `req.user` contains the authenticated user.
    //     res.json({message: "Successful signup!"})
    //   });

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
